import React, { useRef, useEffect, useId, useContext, useState } from "react";
import * as d3 from "d3";
import AppContext from "../state/AppContext";

import { RAW_SKILL_GRAPH } from "../data/skillGraph";

function cloneGraph() {
  const nodes = RAW_SKILL_GRAPH.nodes.map((n) => ({
    ...n,
    img: typeof n.img === "string" ? n.img.trim() : n.img,
  }));
  const links = RAW_SKILL_GRAPH.links.map((l) => ({ ...l }));
  return { nodes, links };
}

const NodeGraphSkills = function ({ isLargeScreen }) {
  const svgRef = useRef(null);
  const wrapRef = useRef(null);
  const clipId = useId().replace(/:/g, "");
  const { darkMode } = useContext(AppContext);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const width = Math.max(260, Math.floor(rect.width || el.offsetWidth || 320));
      const compact = width < 768;
      const height = compact
        ? Math.min(540, Math.max(340, Math.round(width * 0.95)))
        : 580;
      setSize({ width, height });
    };

    measure();
    const mq = requestAnimationFrame(measure);

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => {
        cancelAnimationFrame(mq);
        window.removeEventListener("resize", measure);
      };
    }

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => {
      cancelAnimationFrame(mq);
      ro.disconnect();
    };
  }, [isLargeScreen]);

  useEffect(() => {
    if (!svgRef.current || size.width < 1) return;

    const svgEl = svgRef.current;
    const width = size.width;
    const height = size.height;
    const mobile = width < 768;

    const centerX = width / 2;
    const centerY = height / 2;

    const radiusCenter = mobile ? 26 : 34;
    const radiusSat = mobile ? 28 : 40;
    const imgSize = mobile ? 44 : 58;
    const imgOffset = imgSize / 2;

    const linkDistance = mobile ? Math.min(130, width * 0.38) : 260;
    const chargeStrength = mobile ? -380 : -240;
    const collideRadius = mobile ? radiusSat + 8 : radiusSat + 12;

    const strokeLink = darkMode ? "rgba(148,163,184,0.45)" : "rgba(100,116,139,0.35)";
    const strokeNode = darkMode ? "rgba(226,232,240,0.7)" : "rgba(15,23,42,0.55)";
    const fillSatellite = darkMode ? "#1e293b" : "#f8fafc";
    const fillCenter = darkMode ? "#6366f1" : "#4f46e5";

    const { nodes, links } = cloneGraph();

    const cx = nodes.find((n) => n.id === "center");
    if (cx) {
      cx.fx = centerX;
      cx.fy = centerY;
      cx.x = centerX;
      cx.y = centerY;
    }

    let i = 0;
    const satellites = nodes.filter((n) => n.id !== "center");
    const ring = Math.min(width, height) * (mobile ? 0.32 : 0.38);
    satellites.forEach((d) => {
      const angle = (i / Math.max(satellites.length, 1)) * 2 * Math.PI - Math.PI / 2;
      d.x = centerX + ring * Math.cos(angle);
      d.y = centerY + ring * Math.sin(angle);
      i += 1;
    });

    const svg = d3.select(svgEl);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("max-width", "100%");

    const defs = svg.append("defs");
    defs
      .append("clipPath")
      .attr("id", `clip-${clipId}`)
      .append("circle")
      .attr("cx", imgOffset)
      .attr("cy", imgOffset)
      .attr("r", imgOffset - 2);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(linkDistance)
          .strength(0.7)
      )
      .force("charge", d3.forceManyBody().strength(chargeStrength))
      .force("collide", d3.forceCollide(collideRadius).strength(1))
      .alphaDecay(mobile ? 0.06 : 0.025)
      .velocityDecay(0.38);

    const g = svg.append("g").attr("class", "graph-root");

    const link = g
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", strokeLink)
      .attr("stroke-opacity", 0.85)
      .attr("stroke-width", mobile ? 1.25 : 1.75);

    const node = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => (d.id === "center" ? radiusCenter : radiusSat))
      .attr("fill", (d) => (d.id === "center" ? fillCenter : fillSatellite))
      .attr("stroke", strokeNode)
      .attr("stroke-width", mobile ? 1.5 : 2)
      .style("cursor", (d) => (d.id === "center" ? "default" : "grab"));
    node.filter((d) => d.id !== "center").call(satelliteDrag(simulation));

    const images = g
      .append("g")
      .attr("class", "images")
      .selectAll("image")
      .data(nodes.filter((d) => d.id !== "center"))
      .join("image")
      .attr("href", (d) => d.img)
      .attr("width", imgSize)
      .attr("height", imgSize)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .style("pointer-events", "none")
      .attr("clip-path", `url(#clip-${clipId})`);

    simulation.on("tick", () => {
      const c = nodes.find((n) => n.id === "center");
      if (c) {
        c.fx = centerX;
        c.fy = centerY;
        c.x = centerX;
        c.y = centerY;
      }

      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      images.attr("transform", (d) => `translate(${d.x - imgOffset}, ${d.y - imgOffset})`);
    });

    return () => {
      simulation.stop();
    };
  }, [size, isLargeScreen, darkMode, clipId]);

  function satelliteDrag(simulation) {
    return d3
      .drag()
      .on("start", (event) => {
        if (!event.active) simulation.alphaTarget(0.35).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on("drag", (event) => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on("end", (event) => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      });
  }

  const h = size.height > 0 ? size.height : isLargeScreen ? 580 : 400;

  return (
    <div className="graph-section mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-indigo-50/80 p-5 shadow-2xl dark:border-slate-700/80 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-indigo-950/40 sm:p-8">
      <div className="mb-6 text-center">
        <p className="font-poppins_medium text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Interactive
        </p>
        <h3 className="mt-2 font-poppins_semi_bold text-2xl text-slate-900 dark:text-white sm:text-3xl">
          Tech I work with
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 dark:text-slate-400">
          Drag nodes to explore. The graph scales to your screen—optimized for phones and desktop.
        </p>
      </div>

      <div ref={wrapRef} className="relative w-full">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.12)_0%,_transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(129,140,248,0.15)_0%,_transparent_65%)]"
          aria-hidden
        />
        <svg
          ref={svgRef}
          role="img"
          aria-label="Skill network graph"
          width="100%"
          height={h}
          className="relative z-[1] block touch-manipulation rounded-xl"
          style={{ minHeight: h }}
        />
      </div>

      <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
        Tip: pinch-zoom the page if needed; drag any skill node to rearrange.
      </p>
    </div>
  );
};

export default NodeGraphSkills;
