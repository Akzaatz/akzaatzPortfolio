import React, { useRef, useEffect } from "react";
import styles from "./BubbleZone.module.scss";

const BubbleZone = () => {
  const bubbleZoneRef = useRef(null);

  useEffect(() => {
    console.log("bubbleZoneRef:", bubbleZoneRef.current);
  }, []);

  const handleClick = () => {
    console.log("BubbleZone handleClick triggered!");
    for (let i = 0; i < 10; i++) {
      createBubble();
    }
  };

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
    console.log("Bubble created and added to DOM:", bubble);

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

    moveBubble();

    bubble.addEventListener("click", () => {
      const staticZone = document.querySelector(`.${styles.static_zone}`);
      if (staticZone) {
        const banner = document.createElement("span");
        banner.classList.add(styles.banner);

        const slogans = [
          "SERIAL CODEUR",
          "GREEN CODEUR",
          "FRIENDLY CODEUR",
          "SERIOUS CODEUR",
        ];
        const randomSlogan =
          slogans[Math.floor(Math.random() * slogans.length)];
        banner.textContent = randomSlogan;

        switch (randomSlogan) {
          case "SERIAL CODEUR":
            banner.style.backgroundColor = "red";
            break;
          case "GREEN CODEUR":
            banner.style.backgroundColor = "green";
            break;
          case "FRIENDLY CODEUR":
            banner.style.backgroundColor = "blue";
            break;
          case "SERIOUS CODEUR":
            banner.style.backgroundColor = "beige";
            break;
        }

        staticZone.appendChild(banner);
        staticZone.style.opacity = 1;

        setTimeout(() => {
          banner.remove();
          staticZone.style.opacity = 1;
        }, 2000);
      }
    });
  };

  return (
    <div
      className={styles.bubble_zone}
      ref={bubbleZoneRef}
      onClick={handleClick}
    >
      {/* Placeholder for bubbles */}
    </div>
  );
};

BubbleZone.handleClick = () => {
  console.log("BubbleZone handleClick called from export");
  const event = new MouseEvent("click", { bubbles: true });
  const staticIcons = document.querySelectorAll(`.${styles.bubble}`);
  staticIcons.forEach((icon) => {
    console.log("Dispatching click event on icon:", icon);
    icon.dispatchEvent(event);
  });
};

export default BubbleZone;
