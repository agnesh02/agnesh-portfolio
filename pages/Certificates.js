import React, { useState, useEffect } from "react";
import Image from "next/image"; // This is the Next.js Image component

const images = [
  "/assets/coursera_1.png",
  "/assets/udemy_cert.jpg",
  "/assets/meta_cert.png",
  "/assets/coursera_2.png",
  "/assets/coursera_3.png",
  "/assets/coursera_4.png",
];

const Certificates = function () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image(); // Use the native Image constructor (ensure it's `window.Image`)
    img.src = images[currentIndex]; // Preload the image
    img.onload = () => setLoading(false); // Set loading to false when the image is loaded
  }, [currentIndex]);

  const goToNextSlide = () => {
    setLoading(true); // Start loading when switching images
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setLoading(true); // Start loading when switching images
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="glass-panel flex flex-grow flex-col rounded-[1.75rem] p-4 lg:p-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
        Credentials
      </p>
      <div className="flex w-full justify-center">
        {loading ? (
          <div className="flex h-[240px] w-full items-center justify-center sm:h-[320px] lg:h-[500px]">
            <svg
              className="h-8 w-8 animate-spin text-blue-500"
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
        ) : (
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={images[currentIndex]}
            alt="Carousel Slide"
            className="h-[240px] w-full rounded-2xl bg-slate-100 object-contain p-2 dark:bg-slate-800 sm:h-[320px] lg:h-[500px]"
            width={1000} // Set width for the Image component
            height={500} // Set height for the Image component
          />
        )}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          className="rounded-full border border-indigo-500 bg-transparent px-5 py-2 font-semibold text-indigo-700 transition hover:border-transparent hover:bg-indigo-500 hover:text-white dark:text-indigo-200"
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <button
          className="rounded-full border border-indigo-500 bg-transparent px-5 py-2 font-semibold text-indigo-700 transition hover:border-transparent hover:bg-indigo-500 hover:text-white dark:text-indigo-200"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Certificates;
