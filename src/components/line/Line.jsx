import React from "react";
import styles from "./Line.module.scss";

const Line = () => {
  return (
    <div className={styles.line}>
      <div className="divider-custom divider-light" aria-hidden="true">
        <div className="divider-custom-line"></div>
        <div className="divider_custom_icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </div>
  );
};

export default Line;
