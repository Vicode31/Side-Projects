import React from "react";
import "./background.scss";
const cells = 12 * 12; // SCSS $cols * $rows

const Background = () => {
  return (
    <div className="container">
      {Array(cells)
        .fill(null)
        .map((_, index) => (
          <div className="square" key={index}>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        ))}
    </div>
  );
};

export default Background;
