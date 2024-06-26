"use client";
import { motion, useScroll } from "framer-motion";

export default function ScaleButton() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.2,
          rotate: 360,
          backgroundColor: "green",
          color: "white",
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-neutral-50 p-6 rounded-3xl cursor-pointer text-5xl font-medium"
      >
        Click me
      </motion.button>
    </>
  );
}
