import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Line from "../line/Line";
import "./achievements.scss";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 2, y: 0, w: 1, h: 1 },
    { i: "3", x: 0, y: 1, w: 1, h: 1 },
    { i: "4", x: 1, y: 1, w: 1, h: 1 },
    { i: "5", x: 2, y: 1, w: 1, h: 1 },
  ],
  md: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 2, y: 0, w: 1, h: 1 },
    { i: "3", x: 0, y: 1, w: 1, h: 1 },
    { i: "4", x: 1, y: 1, w: 1, h: 1 },
    { i: "5", x: 2, y: 1, w: 1, h: 1 },
  ],
  sm: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 0, y: 1, w: 1, h: 1 },
    { i: "3", x: 1, y: 1, w: 1, h: 1 },
    { i: "4", x: 0, y: 2, w: 1, h: 1 },
    { i: "5", x: 1, y: 2, w: 1, h: 1 },
  ],
  xs: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 0, y: 1, w: 1, h: 1 },
    { i: "2", x: 0, y: 2, w: 1, h: 1 },
    { i: "3", x: 0, y: 3, w: 1, h: 1 },
    { i: "4", x: 0, y: 4, w: 1, h: 1 },
    { i: "5", x: 0, y: 5, w: 1, h: 1 },
  ],
};

const Achievements = () => {
  return (
    <div className="main">
      <h1>Réalisations</h1>
      <Line />
      <div className="achievements">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={300}
          width={1200}
          isResizable={false}
        >
          <div key="0" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/argentbank.webp"
              alt="mignature 724events"
            />
          </div>
          <div key="1" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/booki.webp"
              alt="mininiature booki"
            />
          </div>
          <div key="2" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/kaza.webp"
              alt="mininiature Kasa"
            />
          </div>
          <div key="3" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/myfood.webp"
              alt="mignature ohmyfood"
            />
          </div>
          <div key="4" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/nina.webp"
              alt="mignature Nina Ricci"
            />
          </div>
          <div key="5" className="portfolio-item">
            <div className="portfolio-item-caption"></div>
            <img
              className="img-fluid"
              src="../../../public/img/sophiebuel.webp"
              alt="Miniature Sophie Buel"
            />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Achievements;
