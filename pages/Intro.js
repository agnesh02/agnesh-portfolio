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
              <span className="mb-3 inline-flex w-fit max-w-[calc(100%-0.5rem)] items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold uppercase leading-tight tracking-[0.12em] text-indigo-900 shadow-sm sm:text-xs sm:tracking-[0.18em] dark:border-white/15 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-violet-600 dark:text-white dark:shadow-[0_2px_20px_-4px_rgba(99,102,241,0.65)]">
                Senior Software Engineer · Mobile
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
                I build scalable mobile applications across Android, Flutter,
                and React Native, with a strong focus on real-time IoT and
                healthcare systems, alongside occasional web solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 font-poppins_medium text-sm text-white shadow-lg shadow-indigo-500/35 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/60 dark:shadow-indigo-900/45"
                  type="button"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Contact me
                </button>
                {/* <span className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200">
                  Open to interesting projects
                </span> */}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              Focus areas
            </p>
            <h3 className="mt-2 font-poppins_semi_bold text-2xl text-slate-900 dark:text-white lg:text-3xl">
              What I specialize in
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Production mobile apps—native and cross‑platform—with experience
              in healthcare, IoT (BLE, MQTT), and real‑time data. Below is how
              that breaks down by platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <article className="group flex flex-col rounded-2xl border border-emerald-200/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-emerald-500/25 dark:bg-slate-900/50 dark:shadow-indigo-950/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md transition group-hover:scale-105">
                <DiAndroid className="text-3xl" />
              </div>
              <h4 className="font-poppins_semi_bold text-lg text-slate-900 dark:text-white">
                Native Android
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Kotlin &amp; Java, Jetpack, JNI when performance matters—ideal for
                device‑heavy and clinical workflows.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-sky-200/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-sky-500/25 dark:bg-slate-900/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md transition group-hover:scale-105">
                <SiFlutter className="text-3xl" />
              </div>
              <h4 className="font-poppins_semi_bold text-lg text-slate-900 dark:text-white">
                Flutter
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Cross‑platform UIs with Dart—great for IoT dashboards, offline
                sync, and shared code across Android &amp; iOS.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-violet-200/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-violet-500/25 dark:bg-slate-900/50 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-md transition group-hover:scale-105">
                <DiReact className="text-3xl" />
              </div>
              <h4 className="font-poppins_semi_bold text-lg text-slate-900 dark:text-white">
                React Native
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                JavaScript/TypeScript mobile apps with native modules when
                needed—sensor UIs, BLE bridges, and fast iteration.
              </p>
            </article>
          </div>

          {isLargeScreen && <AdditionalInfo />}
        </section>
        {!isLargeScreen && <AdditionalInfo />}
      </main>
    </div>
  );
};

export default Intro;
