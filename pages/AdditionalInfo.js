import React, { useContext } from "react";
import { TbBrandNextjs, TbStars } from "react-icons/tb";
import {
  SiFirebase,
  SiTailwindcss,
  SiVisualstudiocode,
  SiReact,
} from "react-icons/si";
import AppContext from "../state/AppContext";

const STACK = [
  {
    name: "Next.js",
    blurb: "App shell & routing",
    icon: (props) => <TbBrandNextjs {...props} />,
    lightClassName: "border-slate-200 bg-gradient-to-br from-slate-50 to-white",
    darkClassName:
      "border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
    iconClass: "text-slate-900 dark:text-white",
  },
  {
    name: "Tailwind CSS",
    blurb: "Layout & design tokens",
    icon: (props) => <SiTailwindcss {...props} />,
    lightClassName: "border-sky-200 bg-sky-50",
    darkClassName:
      "border-slate-700 bg-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    iconClass: "text-sky-600 dark:text-sky-300",
  },
  {
    name: "Firebase",
    blurb: "Contact form backend",
    icon: (props) => <SiFirebase {...props} />,
    lightClassName: "border-amber-200 bg-amber-50",
    darkClassName:
      "border-slate-700 bg-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    iconClass: "text-amber-600 dark:text-amber-300",
  },
  {
    name: "VS Code",
    blurb: "Where it’s written",
    icon: (props) => <SiVisualstudiocode {...props} color="currentColor" />,
    lightClassName: "border-blue-200 bg-blue-50",
    darkClassName:
      "border-slate-700 bg-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    iconClass: "text-blue-700 dark:text-sky-300",
  },
  {
    name: "React",
    blurb: "UI components",
    icon: (props) => <SiReact {...props} />,
    lightClassName: "border-cyan-200 bg-cyan-50",
    darkClassName:
      "border-slate-700 bg-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    iconClass: "text-cyan-600 dark:text-cyan-300",
  },
  {
    name: "AI tools",
    blurb: "Ideation, polish & pair coding",
    icon: (props) => <TbStars {...props} />,
    lightClassName: "border-emerald-200 bg-emerald-50",
    darkClassName:
      "border-slate-700 bg-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    iconClass: "text-emerald-700 dark:text-emerald-300",
  },
];

const iconWellClass =
  "mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 shadow-inner dark:border-slate-600/55 dark:bg-slate-800/90";

const AdditionalInfo = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div className="mt-14 border-t border-slate-200/80 pt-12 dark:border-slate-700/80">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Colophon
        </p>
        <h3 className="mt-2 font-poppins_semi_bold text-2xl text-slate-900 dark:text-white sm:text-3xl">
          This portfolio is built with
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          The same stack I reach for on small web surfaces: React, Next.js,
          Tailwind, and Firebase for the contact form—plus the editor and AI
          tools I use day to day.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
              darkMode ? item.darkClassName : item.lightClassName
            }`}
          >
            <div className={`${iconWellClass} ${item.iconClass}`}>
              {item.icon({
                className: "h-8 w-8",
                size: undefined,
              })}
            </div>
            <h4 className="font-poppins_semi_bold text-lg text-slate-900 dark:text-slate-50">
              {item.name}
            </h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {item.blurb}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;
