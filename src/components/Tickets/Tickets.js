import { useEffect } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";

import styles from "./Tickets.module.css";

const Tickets = (props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://partners.goout.net/framework/auto.js";
    script.id = "goOutScript";
    script.type = "text/javascript";
    script.dataset.contact = "2859";
    script.dataset.sale =
      "https://goout.net/cs/listky/jarni-zizkovska-noc-2022/ckom/";

    document.body.querySelector("#goout").appendChild(script);
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.closeButton} onClick={props.onClose}>
        <Link to="/">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
      <div id="goout"></div>
    </Modal>
  );
};

export default Tickets;
