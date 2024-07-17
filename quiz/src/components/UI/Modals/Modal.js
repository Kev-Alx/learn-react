import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button";

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={onClose}></div>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          {children}
          <Button label="Close" onClick={onClose} />
        </div>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
