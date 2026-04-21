import Image from "next/image";
import { useContext, useState, useMemo, useEffect } from "react";
import { SiGooglecloud, SiNextdotjs } from "react-icons/si";
import AppContext from "../state/AppContext";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../data/resumeContent";
import { formatTechLabel } from "../data/techLabels";

const PROJECT_IMAGES = {
  cloud_college: require("../public/assets/cloud_college.png"),
  stubot: require("../public/assets/stubot.png"),
  clinic_management: require("../public/assets/clinic_management.png"),
  financial_tracker: require("../public/assets/financial_tracker.png"),
  blend_app: require("../public/assets/blend_app.png"),
  ai_digital_stethoscope: require("../public/assets/ai-digital-stethoscope.png"),
  ai_clinical_support: require("../public/assets/ai-clinical-support.png"),
  pool_monitoring: require("../public/assets/pool-monitoring.png"),
  water_pressure_monitoring: require("../public/assets/water-pressure-monitoring.png"),
  devImg: require("../public/devImg.png"),
};

function resolveProjectImage(project) {
  if (project.imageUrl && typeof project.imageUrl === "object") {
    return project.imageUrl;
  }
  if (
    typeof project.imageUrl === "string" &&
    PROJECT_IMAGES[project.imageUrl]
  ) {
    return PROJECT_IMAGES[project.imageUrl];
  }
  return null;
}

const TECH_IMAGES = {
  firebase: require("../public/assets/firebase_img.png"),
  android: require("../public/assets/android_img.png"),
  mySql: require("../public/assets/mySql_img.png"),
  html: require("../public/assets/html_img.png"),
  css: require("../public/assets/css_img.png"),
  php: require("../public/assets/php_img.png"),
  ajax: require("../public/assets/ajax_img.png"),
  python: require("../public/assets/python_img.png"),
  flutter: require("../public/assets/flutter.png"),
  reactNative: require("../public/assets/react.png"),
  react: require("../public/assets/react.png"),
  mqtt: require("../public/assets/mqtt_ver.png"),
  snapAr: require("../public/assets/snap_ar.png"),
  ble: require("../public/assets/ble.png"),
};

const TECH_VECTOR_ICONS = {
  nextjs: SiNextdotjs,
  gcp: SiGooglecloud,
};

function getTechnologyImageUrl(technologyUsed) {
  return TECH_IMAGES[technologyUsed] ?? null;
}

function getTechInitials(label) {
  const words = String(label || "")
    .replace(/[^a-zA-Z0-9+]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) return "?";
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w.slice(0, 1).toUpperCase())
    .join("");
}

function getTechVectorIcon(technologyUsed) {
  return TECH_VECTOR_ICONS[technologyUsed] ?? null;
}

function projectTitleAbbrev(title) {
  const words = title
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 3);
  if (words.length === 0) return "?";
  return words
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 4);
}

const Projects = () => {
  const [tab, setTab] = useState("featured");
  const projects = useMemo(
    () => (tab === "featured" ? FEATURED_PROJECTS : OTHER_PROJECTS),
    [tab]
  );

  const [currentProject, setCurrentProject] = useState(FEATURED_PROJECTS[0]);
  const [loadingImage, setLoadingImage] = useState(
    () => !!resolveProjectImage(FEATURED_PROJECTS[0])
  );
  const { darkMode, isLargeScreen } = useContext(AppContext);

  useEffect(() => {
    const first = projects[0];
    setCurrentProject(first);
    setLoadingImage(!!resolveProjectImage(first));
  }, [tab, projects]);

  const handlePrev = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const prev = projects[prevIndex];
    setCurrentProject(prev);
    setLoadingImage(!!resolveProjectImage(prev));
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    const next = projects[nextIndex];
    setCurrentProject(next);
    setLoadingImage(!!resolveProjectImage(next));
  };

  const imgSrc = resolveProjectImage(currentProject);

  return (
    <div className="glass-panel mt-2 flex min-h-screen flex-col items-start rounded-[1.75rem] p-4 lg:p-8">
      <div className="mb-4 w-full text-center lg:mb-6 lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Portfolio
        </p>
        <h1 className="mt-1 font-poppins_semi_bold text-2xl text-slate-900 dark:text-white lg:text-3xl">
          Projects
        </h1>
        <div className="mx-auto mt-4 flex max-w-md flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
          <button
            type="button"
            onClick={() => setTab("featured")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === "featured"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/90 dark:bg-slate-700/80 dark:text-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            Highlighted work
          </button>
          <button
            type="button"
            onClick={() => setTab("other")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === "other"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/90 dark:bg-slate-700/80 dark:text-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            Other projects
          </button>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {tab === "featured"
            ? "Recent professional and product work."
            : "Earlier apps, academic projects, and legacy portfolio entries."}
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-2 py-4">
        <div className="flex flex-col justify-center">
          <button
            type="button"
            onClick={() => handlePrev()}
            className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
            aria-label="Previous project"
          >
            &lt;
          </button>
        </div>
        <div className="flex w-full justify-center">
          <div
            className={`relative flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 ${
              isLargeScreen ? "h-[500px]" : "h-[240px] sm:h-[320px]"
            }`}
          >
            {loadingImage && imgSrc && (
              <div className="absolute z-10 flex h-full w-full items-center justify-center bg-slate-100/80 dark:bg-slate-800/80">
                <svg
                  className="h-20 w-20 animate-spin text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0116 0"
                  />
                </svg>
              </div>
            )}
            {imgSrc ? (
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "14px",
                }}
                src={imgSrc}
                alt={currentProject.title}
                className="w-full rounded-2xl object-contain p-3"
                onLoadingComplete={() => setLoadingImage(false)}
              />
            ) : (
              <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-fuchsia-600/20 p-8 dark:from-indigo-500/25 dark:via-slate-800 dark:to-violet-900/30">
                <span className="rounded-2xl border border-white/30 bg-white/10 px-6 py-8 font-poppins_semi_bold text-4xl tracking-wide text-indigo-200 dark:text-indigo-100 sm:text-5xl">
                  {projectTitleAbbrev(currentProject.title)}
                </span>
                <p className="max-w-sm text-center text-sm text-slate-600 dark:text-slate-400">
                  Screenshot placeholder — add a device mockup or store asset
                  when ready.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            type="button"
            onClick={() => handleNext()}
            className="h-10 w-10 transform rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-800 lg:h-12 lg:w-12"
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        className={`mx-auto mt-2 w-full max-w-4xl text-start ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
          {currentProject.title}
        </h2>
        <p className="mb-8 text-base text-slate-700 dark:text-slate-300 lg:text-lg">
          {currentProject.description}
        </p>

        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
          Highlights
        </h3>
        <ul className="mb-10 space-y-3 text-base lg:text-lg">
          {currentProject.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-500 sm:h-8 sm:w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700 dark:text-slate-200">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-slate-200/90 bg-slate-50/90 p-5 dark:border-slate-600/60 dark:bg-slate-800/50 lg:p-6">
          <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
            Technologies used
          </h3>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
            Stack and tooling for this project (icons where available).
          </p>
          <ul className="flex flex-wrap gap-3">
            {currentProject.technologiesUsed.map((tech) => {
              const src = getTechnologyImageUrl(tech);
              const label = formatTechLabel(tech);
              const VectorIcon = getTechVectorIcon(tech);
              const chipClass = darkMode
                ? "inline-flex items-center gap-2.5 rounded-xl border border-slate-600 bg-slate-900/85 py-2 pl-2 pr-3 shadow-sm text-slate-100"
                : "inline-flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white/95 py-2 pl-2 pr-3 shadow-sm text-slate-800";
              const iconWellClass = darkMode
                ? "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-600/60 bg-slate-800/90"
                : "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-white";
              return (
                <li key={tech}>
                  {src ? (
                    <span className={chipClass}>
                      <span className={iconWellClass}>
                        <Image
                          src={src}
                          alt={label}
                          width={28}
                          height={28}
                          className="max-h-7 w-auto object-contain"
                        />
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </span>
                  ) : VectorIcon ? (
                    <span className={chipClass}>
                      <span className={iconWellClass}>
                        <VectorIcon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </span>
                  ) : (
                    <span className={chipClass}>
                      <span
                        className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold tracking-wide ${
                          darkMode
                            ? "border border-slate-500/60 bg-slate-800/90 text-slate-100"
                            : "border border-slate-300/70 bg-white text-slate-700"
                        }`}
                      >
                        {getTechInitials(label)}
                      </span>
                      <span>{label}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
