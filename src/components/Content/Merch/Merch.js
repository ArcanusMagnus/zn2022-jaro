import MerchItem from "./MerchItem";
import Section from "../../UI/Section";

import styles from "./Merch.module.css";
import merch from "../../../data/Merch.json";

const Merch = (props) => {
  const merchList = merch.Merch.map((item) => {
    return (
      <MerchItem item={item} key={item.id}/>
    );
  });
  return <Section className={styles.merch} id="merch">
      {merchList}
  </Section>;
};

export default Merch;
