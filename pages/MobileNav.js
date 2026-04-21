import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../state/AppContext";
import { pages } from "../state/AppProvider";

const MobileNav = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleNav = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const itemStyle =
    "block rounded-lg px-3 py-2 text-base font-medium font-poppins_light text-slate-100 transition hover:bg-white/15";

  return (
    <div>
      <button
        className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/30"
        onClick={toggleNav}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-900/95 px-4 py-6 text-white shadow-2xl backdrop-blur"
        >
          <div className="mt-8 text-left">
            <ul>
              <li
                style={
                  currentPage == pages.home
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.home);
                  setIsOpen(false);
                }}
              >
                Home
              </li>
              <li
                style={
                  currentPage == pages.certificates
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.certificates);
                  setIsOpen(false);
                }}
              >
                Certificates
              </li>
              <li
                style={
                  currentPage == pages.projects
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.projects);
                  setIsOpen(false);
                }}
              >
                Projects
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
