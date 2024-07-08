import React from "react";
import Line from "../line/Line";
import BubbleZone from "../bubblezone/BubbleZone";
import styles from "./Languages.module.scss";

const Languages = () => {
  const handleBubbleClick = () => {
    console.log("Languages handleBubbleClick triggered!");
    BubbleZone.handleClick();
  };

  return (
    <div className={styles.bubble_zone} id="languages">
      <h2>Languages</h2>
      <Line />
      <div className={styles.static_zone}>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="html" onClick={handleBubbleClick}>
            <i className="fa-brands fa-html5"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="css" onClick={handleBubbleClick}>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="sass" onClick={handleBubbleClick}>
            <i className="fa-brands fa-sass"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="js" onClick={handleBubbleClick}>
            <i className="fa-brands fa-js"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="react" onClick={handleBubbleClick}>
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
      </div>
      <BubbleZone />
    </div>
  );
};

export default Languages;
