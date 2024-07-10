// Nav.jsx
import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`${styles.navbar} ${showLinks ? styles.showNav : ""}`}>
      <div className={styles.navbar_logo}>
        <a href="#header">Akzaatz</a>
      </div>

      <ul className={styles.navbar_links}>
        <li
          className={`${styles.navbar_item} ${
            showLinks ? styles["slideInDown-4"] : ""
          }`}
        >
          <a href="#achievements" className={styles.navbar_link}>
            Réalisations
          </a>
        </li>
        <li
          className={`${styles.navbar_item} ${
            showLinks ? styles["slideInDown-3"] : ""
          }`}
        >
          <a href="#about" className={styles.navbar_link}>
            Compétences
          </a>
        </li>
        <li
          className={`${styles.navbar_item} ${
            showLinks ? styles["slideInDown-2"] : ""
          }`}
        >
          <a href="#languages" className={styles.navbar_link}>
            Langages
          </a>
        </li>
        <li
          className={`${styles.navbar_item} ${
            showLinks ? styles["slideInDown-1"] : ""
          }`}
        >
          <a href="#footer" className={styles.navbar_link}>
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.navbar_burger} onClick={handleShowLinks}>
        <span className={styles.burger_bar}></span>
      </div>
    </nav>
  );
};

export default Nav;
