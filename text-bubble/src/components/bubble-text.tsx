"use client";
import { useEffect } from "react";

const BubbleText = () => {
  useEffect(() => {
    const splitTextIntoSpans = (target: string) => {
      let elements = document.querySelectorAll(target);
      elements.forEach((element) => {
        element.classList.add("split-text");
        let text = (element as HTMLElement).innerText;
        let splitText = text
          .split(" ")
          .map(function (word) {
            let char = word
              .split("")
              .map((char) => {
                return `<span class="split-char">${char}</span>`;
              })
              .join("");
            return `<div class="split-word">${char}&nbsp</div>`;
          })
          .join("");

        element.innerHTML = splitText;
      });
    };

    splitTextIntoSpans(".bubble-text");
  }, []);

  return (
    <div id="app">
      <div className="container">
        <div className="bubble-text text">Bubbble text</div>
      </div>
    </div>
  );
};

export default BubbleText;
