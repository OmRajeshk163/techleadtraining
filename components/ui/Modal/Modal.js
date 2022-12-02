import React from "react";
import Modal from "react-modal";

import styles from "./Modal.module.css";

const ModalPopUp = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={{
        base: styles.modalBase,
        afterOpen: styles.modalBaseAfterOpen,
        beforeClose: styles.modalBaseBeforeClose,
      }}
      overlayClassName={{
        base: styles.overlayBase,
        afterOpen: styles.overlayBaseAfterOpen,
        beforeClose: styles.overlayBaseBeforeClose,
      }}
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={2000}
    >
      <div>{children}</div>
    </Modal>
  );
};
export default ModalPopUp;
