"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"; // Import CSS file for styles

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const moveRight = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const moveLeft = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(moveRight, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const total = 5; // Total number of carousel items

  return (
    <div className={styles.carousel}>
      <div className={styles["carousel__nav"]}>
        <span
          id="moveLeft"
          className={styles["carousel__arrow"]}
          onClick={moveLeft}
        >
          {/* Left arrow SVG */}
        </span>
        <span
          id="moveRight"
          className={styles["carousel__arrow"]}
          onClick={moveRight}
        >
          {/* Right arrow SVG */}
        </span>
      </div>

      {/* Carousel items */}
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`${styles["carousel-item"]} ${
            current === index ? styles["active"] : ""
          }`}
        >
          <div
            className={styles["carousel-item__image"]}
            style={{
              backgroundImage: `url('/carousel-image-${index + 1}.jpg')`,
            }}
          ></div>
          <div className={styles["carousel-item__info"]}>
            <div className={styles["carousel-item__container"]}>
              <h2 className={styles["carousel-item__subtitle"]}>
                Subtitle {index + 1}
              </h2>
              <h1 className={styles["carousel-item__title"]}>
                Title {index + 1}
              </h1>
              <p className={styles["carousel-item__description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                massa id purus ultricies tincidunt.
              </p>
              <a href="#" className={styles["carousel-item__btn"]}>
                Button {index + 1}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
