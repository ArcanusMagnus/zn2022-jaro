import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <Link to="/">
      <div className={styles.backdrop} onClick={props.onClose}></div>
    </Link>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalLocation = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalLocation
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalLocation
      )}
    </>
  );
};

export default Modal;
