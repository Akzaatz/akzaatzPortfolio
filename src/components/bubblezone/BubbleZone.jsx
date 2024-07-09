import React, { useRef } from "react";
import styles from "./BubbleZone.module.scss";

const BubbleZone = ({ randomSlogan }) => {
  const bubbleZoneRef = useRef(null);

  const createBubble = () => {
    const bubbleZone = bubbleZoneRef.current;
    if (!bubbleZone) return;

    const bubble = document.createElement("div");
    bubble.classList.add(styles.bubble);

    const size = Math.random() * 60 + 40 + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    const iconClasses = [
      "fa-brands fa-css3-alt",
      "fa-brands fa-sass",
      "fa-brands fa-js",
      "fa-brands fa-react",
    ];
    const iconClass =
      iconClasses[Math.floor(Math.random() * iconClasses.length)];
    const icon = document.createElement("i");
    icon.className = iconClass;
    const iconSize = parseFloat(size) * 0.6 + "px";
    icon.style.fontSize = iconSize;
    bubble.appendChild(icon);

    const bubbleZoneRect = bubbleZone.getBoundingClientRect();
    const bubbleLeft =
      Math.random() * (bubbleZoneRect.width - parseFloat(size));
    const bubbleTop =
      Math.random() * (bubbleZoneRect.height - parseFloat(size));

    bubble.style.left = bubbleLeft + "px";
    bubble.style.top = bubbleTop + "px";

    bubbleZone.appendChild(bubble);

    const velocityX = (Math.random() - 0.5) * 2;
    const velocityY = (Math.random() - 0.5) * 2;

    const moveBubble = () => {
      const currentTop = parseFloat(bubble.style.top);
      const currentLeft = parseFloat(bubble.style.left);
      bubble.style.top = currentTop + velocityY + "px";
      bubble.style.left = currentLeft + velocityX + "px";

      const bubbleRect = bubble.getBoundingClientRect();
      if (
        bubbleRect.top < bubbleZoneRect.top ||
        bubbleRect.bottom > bubbleZoneRect.bottom ||
        bubbleRect.left < bubbleZoneRect.left ||
        bubbleRect.right > bubbleZoneRect.right
      ) {
        bubble.style.display = "none";
      } else {
        bubble.style.display = "block";
      }

      if (bubble.style.display !== "none") {
        requestAnimationFrame(moveBubble);
      }
    };

    bubble.addEventListener("click", (e) => {
      e.stopPropagation();
      randomSlogan();
    });

    moveBubble();
  };

  return <div className={styles.bubble_zone} ref={bubbleZoneRef}></div>;
};

export default BubbleZone;
