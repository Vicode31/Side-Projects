"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ColorButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      style={{
        backgroundColor: scrollY > 700 ? "red" : "white",
        color: scrollY > 700 ? "white" : "black",
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.2 }}
      className="p-6 rounded-3xl cursor-pointer text-5xl font-medium"
    >
      Click me
    </motion.button>
  );
};

export default ColorButton;
