import React, { useEffect } from "react";
import Line from "../line/Line";
import languagesStyles from "./Languages.module.scss";
import bubbleZoneStyles from "../bubblezone/BubbleZone.module.scss";

const Languages = () => {
  useEffect(() => {
    const staticBubbles = document.querySelectorAll(
      `.${languagesStyles.static_bubble} .${languagesStyles.bubble}`
    );
    staticBubbles.forEach((bubble) => {
      bubble.addEventListener("click", handleBubbleClick);
    });

    return () => {
      staticBubbles.forEach((bubble) => {
        bubble.removeEventListener("click", handleBubbleClick);
      });
    };
  }, []);

  const handleBubbleClick = (e) => {
    e.stopPropagation();
    createBubbles();
  };

  const createBubbles = () => {
    const bubbleZone = document.querySelector(
      `.${bubbleZoneStyles.bubble_zone}`
    );
    if (!bubbleZone) return;

    const numBubbles = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add(bubbleZoneStyles.bubble);

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
          bubble.remove();
        } else {
          requestAnimationFrame(moveBubble);
        }
      };

      bubble.addEventListener("click", (e) => {
        e.stopPropagation();
        randomSlogan();
      });

      moveBubble();
    }
  };

  const randomSlogan = () => {
    const staticZone = document.querySelector(
      `.${languagesStyles.static_zone}`
    );
    if (staticZone) {
      const banner = document.createElement("span");
      banner.classList.add(languagesStyles.banner);

      const slogans = [
        "SERIAL CODEUR",
        "GREEN CODEUR",
        "FRIENDLY CODEUR",
        "SERIOUS CODEUR",
      ];
      const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
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
          banner.style.backgroundColor = "grey";
          break;
      }

      staticZone.appendChild(banner);
      staticZone.style.opacity = 1;

      setTimeout(() => {
        banner.remove();
        staticZone.style.opacity = 1;
      }, 2000);
    }
  };

  return (
    <div className={languagesStyles.bubble_zone} id="languages">
      <h2>Languages</h2>
      <Line />
      <div className={languagesStyles.static_zone}>
        <div className={languagesStyles.static_bubble}>
          <div className={languagesStyles.bubble} id="html">
            <i className="fa-brands fa-html5"></i>
          </div>
        </div>
        <div className={languagesStyles.static_bubble}>
          <div className={languagesStyles.bubble} id="css">
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        </div>
        <div className={languagesStyles.static_bubble}>
          <div className={languagesStyles.bubble} id="sass">
            <i className="fa-brands fa-sass"></i>
          </div>
        </div>
        <div className={languagesStyles.static_bubble}>
          <div className={languagesStyles.bubble} id="js">
            <i className="fa-brands fa-js"></i>
          </div>
        </div>
        <div className={languagesStyles.static_bubble}>
          <div className={languagesStyles.bubble} id="react">
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
      </div>
      <div className={bubbleZoneStyles.bubble_zone} id="bubbleZone">
        {/* Zone pour les bulles générées */}
      </div>
    </div>
  );
};

export default Languages;
