"use client";
import React from "react";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Pourquoi faire un site web?",
    description:
      "Pour une meilleure visibilité, pour se présenter à vos clients, pour se partager votre vision et vos valeurs.",
  },
  {
    title: "Un design personnalisé et original",
    description:
      "Une webdesigner après un échange avec vous, lui permettra de créer le design qui vous convient.",
  },
  {
    title: "Un référencement naturel",
    description:
      "C'est beau d'avoir un site web mais c'est encore mieux s'il est visible.",
  },
];

export default function Home() {
  return (
    <main>
      {" "}
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </main>
  );
}
