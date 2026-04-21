import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiReact, DiAndroid } from "react-icons/di";
import Image from "next/image";
import devImg from "../public/devImg2.jpeg";
import React, { useContext, useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import AppContext from "../state/AppContext";
import { SiFlutter } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Intro = function () {
  const { isLargeScreen } = useContext(AppContext);

  const goToInstagram = () => {
    window.open("https://instagram.com/agnesh.05?igshid=MzNlNGNkZWQ4Mg==");
  };

  const gotToGithub = () => {
    window.open("https://github.com/agnesh02");
  };

  const gotToLinkedin = () => {
    window.open("https://www.linkedin.com/in/agnesh2002");
  };

  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div>
      <main className="glass-panel relative overflow-hidden rounded-[1.75rem] px-4 py-10 lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 to-fuchsia-500/20 blur-3xl dark:from-indigo-500/20 dark:to-fuchsia-600/15"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/25 to-indigo-400/20 blur-3xl dark:from-cyan-500/10 dark:to-indigo-500/10"
          aria-hidden
        />

        <section className="relative flex min-h-[72vh] flex-col justify-between lg:min-h-[78vh]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col justify-center">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-950/50 dark:text-indigo-200">
                Mobile developer
              </span>

              <h3 className="font-poppins_regular text-xl text-slate-600 dark:text-slate-300 lg:text-2xl">
                <ReactTyped
                  strings={["Hi, I am"]}
                  typeSpeed={typingComplete ? 0 : 100}
                  onComplete={() => setTypingComplete(true)}
                  showCursor={!typingComplete}
                />
              </h3>

              <h2
                id="nameTyped"
                className="mt-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text py-1 font-poppins_medium text-4xl text-transparent dark:from-indigo-300 dark:via-fuchsia-300 dark:to-pink-300 lg:text-6xl lg:leading-tight"
              >
                {typingComplete && (
                  <ReactTyped
                    strings={["Agnesh S Kumar"]}
                    typeSpeed={100}
                    startDelay={800}
                  />
                )}
              </h2>

              <p className="mt-5 font-poppins_light text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl">
                I build polished{" "}
                <span className="font-poppins_medium text-slate-800 dark:text-white">
                  native
                </span>{" "}
                and{" "}
                <span className="font-poppins_medium text-slate-800 dark:text-white">
                  cross‑platform
                </span>{" "}
                apps with Android, Flutter, and React Native.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 font-poppins_medium text-sm text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.03] hover:shadow-xl dark:shadow-indigo-900/40"
                  type="button"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Contact me
                </button>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Open to interesting projects
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 -z-10 mx-auto max-w-sm rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-pink-500/25 blur-2xl dark:opacity-70" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-white/80 shadow-2xl dark:ring-indigo-500/40 lg:h-[22rem] lg:w-[22rem]">
                <Image
                  src={devImg}
                  width={400}
                  height={300}
                  priority
                  className="h-full w-full object-cover"
                  alt="Agnesh S Kumar"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center gap-5 text-2xl text-slate-600 dark:text-slate-300 lg:mt-16 lg:text-3xl">
            <button
              type="button"
              className="rounded-2xl border border-transparent p-3 transition hover:scale-110 hover:border-pink-300/50 hover:bg-pink-50/80 hover:text-pink-600 dark:hover:bg-slate-800/80 dark:hover:text-pink-400"
              onClick={() => goToInstagram()}
              aria-label="Instagram"
            >
              <FaInstagram />
            </button>
            <button
              type="button"
              className="rounded-2xl border border-transparent p-3 transition hover:scale-110 hover:border-slate-300 hover:bg-slate-100/90 hover:text-slate-900 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
              onClick={() => gotToGithub()}
              aria-label="GitHub"
            >
              <FaGithub />
            </button>
            <button
              type="button"
              className="rounded-2xl border border-transparent p-3 transition hover:scale-110 hover:border-blue-300/60 hover:bg-blue-50/90 hover:text-blue-700 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              onClick={() => gotToLinkedin()}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </button>
          </div>
        </section>

        <div className="h-10 lg:h-14" />

        <section className="relative pb-4">
          <div className="mb-10 text-center">
            <h3 className="font-poppins_semi_bold text-2xl text-slate-900 dark:text-white lg:text-3xl">
              What I specialize in
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              End‑to‑end mobile experiences—from native Android to Flutter and
              React Native.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="group flex w-full items-center justify-center gap-4 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-500 to-teal-600 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-emerald-500/20">
              <div className="text-6xl transition group-hover:scale-105 lg:text-7xl">
                <DiAndroid />
              </div>
              <h2 className="font-poppins_semi_bold text-lg lg:text-xl">
                Android apps
              </h2>
            </div>

            <div className="group flex w-full items-center justify-center gap-4 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-500 to-blue-600 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-sky-500/20">
              <div className="text-6xl transition group-hover:scale-105 lg:text-7xl">
                <SiFlutter />
              </div>
              <h2 className="font-poppins_semi_bold text-lg lg:text-xl">
                Flutter apps
              </h2>
            </div>

            <div className="group flex w-full items-center justify-center gap-4 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-500 to-indigo-600 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-cyan-500/20 sm:col-span-2 lg:col-span-1">
              <div className="text-6xl transition group-hover:scale-105 lg:text-7xl">
                <DiReact />
              </div>
              <h2 className="font-poppins_semi_bold text-lg lg:text-xl">
                React Native apps
              </h2>
            </div>
          </div>

          {isLargeScreen && <AdditionalInfo isLargeScreen={isLargeScreen} />}
        </section>
        {!isLargeScreen && <AdditionalInfo isLargeScreen={isLargeScreen} />}
      </main>
    </div>
  );
};

export default Intro;
