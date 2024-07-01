import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <p>CONTACT</p>

        <a
          className="btn btn-outline-light btn-social mx-1"
          href="https://github.com/Akzaatz"
        >
          <i className="fa-brands fa-github"></i>{" "}
          <span className="sr-only">GitHub</span>
        </a>

        <a
          className="btn btn-outline-light btn-social mx-1"
          href="mailto:akzaats@protonmail.com"
        >
          <i className="far fa-envelope"></i>
          <span className="sr-only">Mail</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
