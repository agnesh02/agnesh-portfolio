import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFirebase,
  SiTailwindcss,
  SiVisualstudiocode,
  SiReact,
  SiOpenai,
} from "react-icons/si";

const AdditionalInfo = ({ isLargeScreen }) => {
  const itemClass = `flex flex-col items-center justify-center ${
    isLargeScreen ? "h-40 w-60 rounded-2xl" : "h-40 w-40 rounded-3xl"
  } py-4 px-4 shadow-lg transition hover:-translate-y-1 hover:shadow-xl`;

  return (
    <div className="mt-12 border-t border-slate-200/80 pt-10 dark:border-slate-700/80">
      <div className="flex justify-center">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            This portfolio
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            Built with
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3">
        <div className={`${itemClass} bg-[#000000] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <TbBrandNextjs size={95} color="white" />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold text-white">
            Next JS
          </h2>
        </div>

        <div className={`${itemClass} bg-[#38bdf8] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <SiTailwindcss size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            Tailwind CSS
          </h2>
        </div>

        <div className={`${itemClass} bg-[#FFCA28] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <SiFirebase size={90} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold ">
            Firebase
          </h2>
        </div>

        <div className={`${itemClass} bg-[#007ACC] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <SiVisualstudiocode color="white" size={90} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold text-white">
            VS Code
          </h2>
        </div>

        <div className={`${itemClass} bg-[#61DAFB] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <SiReact size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            React
          </h2>
        </div>

        <div className={`${itemClass} bg-[#10A37F] hover:text-white`}>
          <div className="flex justify-center text-6xl">
            <SiOpenai size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            ChatGPT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
