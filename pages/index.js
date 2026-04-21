import Head from "next/head";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext, useEffect } from "react";
import Intro from "./Intro";
import NodeGraphSkills from "./NodeGraphSkills";
import Certificates from "./Certificates";
import MobileNav from "./MobileNav";
import Projects from "./Projects";
import AppContext from "../state/AppContext";
import { pages } from "../state/AppProvider";
import SkillsOverview from "./SkillsOverview";
import Contact from "./Contact";

const Home = function () {
  const {
    darkMode,
    setDarkMode,
    isLargeScreen,
    setIsLargeScreen,
    currentPage,
    setCurrentPage,
  } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (window.location.hash === "#contact") {
      window.history.replaceState(null, null, window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  const downloadResume = function () {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1H7leexzj77C2md2vfG9OdlTZDVIB5PkQ/view?usp=sharing";
    link.download = "agnesh_resume.pdf";
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
  };

  return (
    <div>
      <Head>
        <title>Agnesh's Portfolio</title>
        <meta
          name="description"
          content="Senior Software Engineer — native Android, Flutter, React Native; BLE, MQTT, healthcare & IoT apps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-shell px-4 pb-12 pt-5 text-slate-900 transition-colors dark:text-slate-100 lg:px-12">
        <section className="relative z-[1] mx-auto flex min-h-screen w-full max-w-7xl flex-col">
          <nav className="sticky top-4 z-30 mb-8 flex items-center overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.55)] backdrop-blur-md dark:border-white/10 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.65)] lg:px-7">
            <div className="flex items-center gap-4 lg:gap-10">
              {!isLargeScreen && <MobileNav setIsActive={setCurrentPage} />}
              <button
                className="font-poppins_semi_bold text-lg text-white transition hover:text-slate-200 lg:text-2xl"
                onClick={() => setCurrentPage(pages.home)}
              >
                My Portfolio
              </button>
              {isLargeScreen && (
                <ul className="flex list-none items-center gap-3 text-white">
                  <li>
                    <button
                      className="rounded-lg px-4 py-2 font-poppins_semi_bold text-sm transition hover:bg-white/10 hover:text-yellow-300 lg:text-base"
                      onClick={() => setCurrentPage(pages.certificates)}
                    >
                      Certificates
                    </button>
                  </li>
                  <li>
                    <button
                      className="rounded-lg px-4 py-2 font-poppins_semi_bold text-sm transition hover:bg-white/10 hover:text-pink-200 lg:text-base"
                      onClick={() => setCurrentPage(pages.projects)}
                    >
                      Projects
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <li className="list-none text-xl lg:mr-2 lg:text-2xl">
                {darkMode ? (
                  <FaSun
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-white transition hover:text-yellow-300"
                  />
                ) : (
                  <FaMoon
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-white transition hover:text-slate-200"
                  />
                )}
              </li>
              <li className="list-none">
                <a
                  className="cursor-pointer rounded-full bg-white/15 px-4 py-2 text-sm text-white ring-1 ring-white/40 transition hover:bg-white hover:text-indigo-700 lg:px-6"
                  onClick={() => downloadResume()}
                >
                  Resume
                </a>
              </li>
            </div>
          </nav>

          {currentPage === pages.home && <Intro />}
          {currentPage === pages.home && (
            <NodeGraphSkills isLargeScreen={isLargeScreen} />
          )}
          {currentPage === pages.home && <SkillsOverview />}
          {currentPage === pages.home && <Contact />}
          {currentPage === pages.certificates && <Certificates />}
          {currentPage === pages.projects && <Projects />}
        </section>
      </main>
    </div>
  );
};

export default Home;
