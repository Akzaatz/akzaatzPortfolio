import React from "react";
import Bubble from "../bubble/Bubble";
import styles from "./BubbleZone.module.scss";

const BubbleZone = () => {
  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      // Création des bulles lors du clic
    }
  };

  return (
    <div className={styles.bubble_zone} onClick={handleClick}>
      <Bubble />

      {/* Ajoutez d'autres bulles ici si nécessaire */}
    </div>
  );
};

export default BubbleZone;
