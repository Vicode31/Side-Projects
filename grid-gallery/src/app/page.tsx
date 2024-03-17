"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./components/layout-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </main>
  );
}
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gorge de Vintgard</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Considérer comme l'une des plus gorges de ce monde, la Gorge de Vintgard
        est situé en Slovénie.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Le Cervin</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Le Cervin, majestueuse montagne au sommet pyramidale, est sans conteste
        le joyau emblématique de la Suisse. Culminant à 4478 mètres
        d&apos;altitude, elle se dresse fièrement à la frontière entre la Suisse
        et l&apos;Italie.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Les aurores boréales</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Un magnifique phénomène lumineux coloré qui se produit régulièrement
        dans le ciel nocturne de l'hémisphère Nord et notatmment en Norvège.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Les Fjords</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Fjord est un mot norvégien connu dans le monde entier. Il s’agit d’un
        terme issu du vieux norrois, la langue des vikings, qui signifie
        “endroit que l'on traverse"
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/3.jpg.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/4.png",
  },
];
