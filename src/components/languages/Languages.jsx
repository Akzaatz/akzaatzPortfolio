import React, { useEffect, useState } from "react";
import Line from "../line/Line";

import BubbleZone from "../bubblezone/BubbleZone";
import styles from "../languages/Languages.module.scss";
import Bubble from "../bubble/Bubble";

const Languages = () => {
  return (
    <div className={styles.bubble_zone} id="languages">
      <h2>Languages</h2>
      <Line />
      <div className={styles.static_bubble}>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="html">
            <i className="fa-brands fa-html5"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="css">
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="sass">
            <i className="fa-brands fa-sass"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="js">
            <i className="fa-brands fa-js"></i>
          </div>
        </div>
        <div className={styles.static_bubble}>
          <div className={styles.bubble} id="react">
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
      </div>

      <BubbleZone />
    </div>
  );
};

export default Languages;
