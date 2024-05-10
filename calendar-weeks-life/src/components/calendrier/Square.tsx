import styles from "@/styles/Square.module.css";
import { useEffect, useState } from "react";

interface SquareProps {
  isDark: boolean;
  onSquareDarken: () => void;
}

const Square: React.FC<SquareProps> = ({ isDark, onSquareDarken }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isDark) {
      setIsAnimating(true);
      onSquareDarken(); /* Call the callback function */
    }
  }, [isDark, onSquareDarken]);
  return (
    <div
      className={`${styles.square} ${isDark ? styles.dark : ""} ${
        isAnimating ? styles.darken : ""
      }`}
      onMouseEnter={triggerAnimation} /* Trigger the animation on mouse enter */
    ></div>
  );
};

export default Square;
