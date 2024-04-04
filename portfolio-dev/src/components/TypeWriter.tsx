"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <Typewriter
        words={["Développeur", "Designer", "Créateur"]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
        onLoopDone={handleDone}
        onType={handleType}
      />
    </>
  );
}
