import React, { useEffect, useState } from "react";
import styles from "./Bubble.module.scss";

const Bubble = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [iconClass, setIconClass] = useState("");
  const [size, setSize] = useState(0);

  useEffect(() => {
    const iconClasses = [
      "fa-brands fa-css3-alt",
      "fa-brands fa-sass",
      "fa-brands fa-js",
      "fa-brands fa-react",
    ];

    const size = Math.random() * 60 + 40;
    const iconClass =
      iconClasses[Math.floor(Math.random() * iconClasses.length)];

    setSize(size);
    setIconClass(iconClass);

    const bubbleZone = document.querySelector(".bubble_zone");
    if (bubbleZone) {
      const bubbleZoneRect = bubbleZone.getBoundingClientRect();
      const left = Math.random() * (bubbleZoneRect.width - size);
      const top = Math.random() * (bubbleZoneRect.height - size);
      setPosition({ left, top });
    }
  }, []);

  useEffect(() => {
    const bubble = document.querySelector(`.${styles.bubble}`);
    if (!bubble) return;

    let velocityX = (Math.random() - 0.5) * 2;
    let velocityY = (Math.random() - 0.5) * 2;

    const moveBubble = () => {
      setPosition((prevPosition) => ({
        left: prevPosition.left + velocityX,
        top: prevPosition.top + velocityY,
      }));

      requestAnimationFrame(moveBubble);
    };

    moveBubble();
  }, []);

  return (
    <span
      className={styles.bubble}
      style={{
        width: size,
        height: size,
        left: position.left,
        top: position.top,
      }}
    >
      <i className={iconClass} style={{ fontSize: size * 0.6 }}></i>
    </span>
  );
};

export default Bubble;
