import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import AppContext from "../state/AppContext";
import { pages } from "../state/AppProvider";

const MobileNav = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleNav = (event) => {
    event.stopPropagation();
    setIsOpen((open) => !open);
  };

  const items = [
    { label: "Home", page: pages.home },
    { label: "Certificates", page: pages.certificates },
    { label: "Projects", page: pages.projects },
  ];

  const menuOverlay =
    mounted &&
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
        />
        <div className="relative m-4 h-[calc(100dvh-2rem)] w-[min(24rem,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white/98 p-5 text-slate-900 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/98 dark:text-slate-100">
          <div className="mb-5 flex items-center justify-between border-b border-slate-200/80 pb-3 dark:border-slate-700/70">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
              Menu
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-2 pb-2">
            {items.map((item) => {
              const active = currentPage === item.page;
              return (
                <li key={item.page}>
                  <button
                    type="button"
                    className={`w-full rounded-xl border px-4 py-3 text-left text-base font-semibold transition ${
                      active
                        ? "border-indigo-300 bg-indigo-50 text-indigo-800 ring-1 ring-indigo-300/60 dark:border-indigo-400/40 dark:bg-indigo-500/20 dark:text-indigo-100"
                        : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-800"
                    }`}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>,
      document.body
    );

  return (
    <div className="relative shrink-0">
      <button
        className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
        onClick={toggleNav}
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
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

      {menuOverlay}
    </div>
  );
};

export default MobileNav;
