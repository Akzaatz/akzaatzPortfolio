import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Line from "../line/Line";
import "./skills.scss";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 0, y: 1, w: 1, h: 1 },
    { i: "3", x: 1, y: 1, w: 1, h: 1 },
    { i: "4", x: 0, y: 2, w: 1, h: 1 },
    { i: "5", x: 1, y: 2, w: 1, h: 1 },
  ],
  md: [
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 0, y: 1, w: 1, h: 1 },
    { i: "3", x: 1, y: 1, w: 1, h: 1 },
    { i: "4", x: 0, y: 2, w: 1, h: 1 },
    { i: "5", x: 1, y: 2, w: 1, h: 1 },
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

const Skills = () => {
  return (
    <div className="main" id="about">
      <h2>Compétences</h2>
      <Line />
      <div className="skills">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={70}
          width={150}
          isResizable={false}
          isDraggable={false}
        >
          <div key="0" className="skills-item">
            <button className="bottone1">
              <strong>Développement Commercial</strong>
            </button>
          </div>
          <div key="1" className="skills-item">
            <button className="bottone1">
              <strong>Développement Web</strong>
            </button>
          </div>
          <div key="2" className="skills-item">
            <button className="bottone1">
              <strong>Coaching</strong>
            </button>
          </div>
          <div key="3" className="skills-item">
            <button className="bottone1">
              <strong>Communication Digitale</strong>
            </button>
          </div>
          <div key="4" className="skills-item">
            <button className="bottone1">
              <strong>Gestion de Projets</strong>
            </button>
          </div>
          <div key="5" className="skills-item">
            <button className="bottone1">
              <strong>Événementiel</strong>
            </button>
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Skills;
