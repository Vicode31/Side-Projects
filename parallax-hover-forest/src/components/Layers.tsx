import Link from "next/link";
import React from "react";

const Layers = () => {
  return (
    <div className="h-screen min-h-[500px] transform-3d rotate-x-[var(--move-y)] rotate-y-[var(--move-x)] will-change-transform transition-transform ease-[var(--transition-timing-function)] duration-[var(--transition-duration)]">
      <div className="layer-bg bg-layer-1 -translate-z-[55px] scale-[1.06]" />

      <div className="layer-bg bg-layer-2 translate-z-20 scale-[.88]" />

      <div className="layer-content translate-z-[180px] scale-[.8]">
        <div className="text-[calc(var(--index)*4.35)] text-center uppercase tracking-[calc(var(--index)*-.15)] leading-[.9em] mt-[calc(var(--index)*5.5)]">
          <h1 className="text-shadow">
            Parallax Forest <span className="block">Next.js</span>
          </h1>

          <p className="normal-case hero-text tracking-normal text-[calc(var(--index)*.73)] leading-[3] text-shadow">
            Using Next.js, Page router & TailwindCSS
          </p>
          <a href="https://github.com/Vicode31/Test2.0">
            <button className="btn font-semibold uppercase text-[calc(var(--index)*.71)] -tracking-[.02vw] leading-none px-[calc(var(--index)*1.25)] py-[calc(var(--index)*.7)] bg-transparent rounded-full border-gray-border border-[3px] mt-[calc(var(--index)*2.5)] select-none">
              The github repository
            </button>
          </a>
        </div>
      </div>

      <div className="layer-content translate-z-[190px] scale-[.9] pointer-events-none">
        <canvas className="rain" />
      </div>

      <div className="layer-bg bg-layer-5 translate-z-[300px] scale-[.9] pointer-events-none" />

      <div className="layer-bg bg-layer-6 translate-z-[380px] pointer-events-none" />
    </div>
  );
};

export default Layers;
