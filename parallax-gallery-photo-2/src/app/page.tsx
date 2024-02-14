"use client";
import Image from "next/image";
import { ParallaxScrollSecond } from "./components/ui/ParallaxScroll";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl py-12">
        Parallax Scroll Gallery
      </h1>
      <ParallaxScrollSecond
        images={images}
        className="border-2 border-gray-200 rounded-xl"
      />
    </>
  );
}

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.JPG",
  "/12.JPG",
];
