"use client";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";

import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./components/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="flex items-center justify-center ">
      <div className="bg-[rgb(45,45,45)] p-72 rounded-3xl">
        <h1 className="text-white text-5xl text-center font-bold mb-10">
          Carousel Parallax
        </h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}
