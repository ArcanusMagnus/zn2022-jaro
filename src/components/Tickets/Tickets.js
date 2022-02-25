import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";

import styles from "./Tickets.module.css";

const Tickets = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.closeButton} onClick={props.onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <form action="" className={styles.ticketForm}>
        <h3>GoOut formulář</h3>
      </form>
    </Modal>
  );
};

export default Tickets;
