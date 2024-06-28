import React, { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">Akzaatz</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Réalisations
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Compétences
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Langages
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={() => handleShowLinks()}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
