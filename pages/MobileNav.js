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
        className="fixed inset-0 z-[200] flex flex-col"
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
        <div className="relative mx-4 mt-4 max-h-[min(520px,calc(100dvh-2rem))] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/20 bg-slate-900/98 p-4 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              Menu
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-2 pb-1">
            {items.map((item) => {
              const active = currentPage === item.page;
              return (
                <li key={item.page}>
                  <button
                    type="button"
                    className={`w-full rounded-xl px-3 py-3 text-left text-base font-medium transition ${
                      active
                        ? "bg-indigo-500/35 text-white ring-1 ring-indigo-300/50"
                        : "bg-white/5 text-slate-100 hover:bg-white/15"
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
        className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/30 transition hover:bg-white/20"
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
