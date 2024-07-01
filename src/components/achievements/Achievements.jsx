import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Line from "../line/Line";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import styles from "./Achievements.module.scss";
import Modal from "../modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    image: "",
    link: "",
  });

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const portfolioItems = [
    {
      id: "0",
      title: "Argent Bank",
      image: "img/argentbank.webp",
      link: "https://akzaatz.github.io/Argent-Bank/",
    },
    {
      id: "1",
      title: "Booki",
      image: "img/booki.webp",
      link: "https://akzaatz.github.io/portfolio/booki",
    },
    {
      id: "2",
      title: "Kasa",
      image: "img/kaza.webp",
      link: "https://akzaatz.github.io/Kasa/",
    },
    {
      id: "3",
      title: "OhMyFood",
      image: "img/myfood.webp",
      link: "https://akzaatz.github.io/ohmyfood/",
    },
    {
      id: "4",
      title: "Nina Ricci",
      image: "img/nina.webp",
      link: "https://akzaatz.github.io/nina-carducci/",
    },
    {
      id: "5",
      title: "Sophie Bluel",
      image: "img/sophiebluel.webp",
      link: "https://akzaatz.github.io/sophie-Bluel/FrontEnd/index.html",
    },
  ];

  return (
    <div className={styles.main}>
      <h1>Réalisations</h1>
      <Line />
      <div className={styles.achievements}>
        <ResponsiveGridLayout
          className={styles.layout}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={300}
          width={1200}
          isResizable={false}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={styles.portfolio_item}
              onClick={() => handleOpenModal(item)}
            >
              <div className={styles.portfolio_item_caption}></div>
              <img
                className={styles.img_fluid}
                src={item.image}
                alt={`Miniature ${item.title}`}
              />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
};

export default Achievements;
