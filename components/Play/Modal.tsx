import React from "react";
import styles from "styles/Modal.module.scss";

interface ModalProps {
  time: number;
  onEnd: () => void;
}

const Modal = ({ time, onEnd }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Game Win</h2>
        <span>{time}s</span>

        <span className={styles.modalBack} onClick={onEnd}>
          back
        </span>
      </div>
    </div>
  );
};

export default Modal;
