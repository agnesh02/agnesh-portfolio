import { SKILL_CATEGORIES } from "../data/resumeContent";

const SkillsOverview = function () {
  return (
    <section
      className="mt-8 w-full px-0 sm:mt-10"
      aria-labelledby="skills-overview-heading"
    >

      <div
        className="rounded-[1.75rem] border border-slate-200/70 bg-white/50 p-6 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/40 sm:p-8"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Engineer Overview
        </p>
        <h3
          id="skills-overview-heading"
          className="mt-2 text-center font-poppins_semi_bold text-2xl text-slate-900 dark:text-white sm:text-3xl"
        >
          Skills & expertise
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400">
          Structured skill domains spanning mobile apps, real-time architectures, cloud platforms, and development utilities.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-2">
          {SKILL_CATEGORIES.map((cat) => (
            <li
              key={cat.id}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-600/50 dark:bg-slate-800/60 lg:p-5"
            >
              <h4 className="font-poppins_medium text-lg text-indigo-700 dark:text-indigo-300">
                {cat.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {cat.proficiency}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsOverview;
