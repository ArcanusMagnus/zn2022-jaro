import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";

import styles from "./Tickets.module.css";

const Tickets = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.closeButton} onClick={props.onClose}>
        <Link to="/"><FontAwesomeIcon icon={faTimes} /></Link>
      </div>
      <form action="" className={styles.ticketForm}>
        <h3>GoOut formulář</h3>
      </form>
    </Modal>
  );
};

export default Tickets;
