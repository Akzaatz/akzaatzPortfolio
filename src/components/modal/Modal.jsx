// Modal.jsx
import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>{content.title}</h2>
        <img
          src={content.image}
          alt={content.title}
          className={styles.modalImage}
        />
        <a href={content.link} target="_blank" rel="noopener noreferrer">
          Visit {content.title}
        </a>
        <div>
          <button className={styles.modal_button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
