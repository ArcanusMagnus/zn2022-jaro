import { useEffect } from "react";

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

  return <div id="goout" className={styles.goout + ' ' + styles.active}></div>;
};

export default Tickets;
