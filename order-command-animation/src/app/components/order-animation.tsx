"use client";
import React from "react";
import styles from "../styles/OrderConfirmation.module.css";

const OrderConfirmation = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.currentTarget;
    if (!button.classList.contains(styles.animate)) {
      button.classList.add(styles.animate);
      setTimeout(() => {
        button.classList.remove(styles.animate);
      }, 10000);
    }
  };

  return (
    <div>
      <button className={styles.order} onClick={handleClick}>
        <span className={styles.default}>Terminer la commande</span>
        <span className={styles.success}>
          Commande terminée
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>

        <div className={styles.box}></div>
        <div className={styles.truck}>
          <div className={styles.back}></div>
          <div className={styles.front}>
            <div className={styles.window}></div>
          </div>
          <div className={`${styles.light} ${styles.top}`}></div>
          <div className={`${styles.light} ${styles.bottom}`}></div>
        </div>
        <div className={styles.lines}></div>
      </button>
    </div>
  );
};

export default OrderConfirmation;
