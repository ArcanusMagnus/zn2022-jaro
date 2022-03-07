import MerchItem from "./MerchItem";
import Section from "../../UI/Section";

import styles from "./Merch.module.css";
import merch from "../../../data/Merch.json";

const Merch = (props) => {
  const merchList = merch.Merch.map((item) => {
    return <MerchItem item={item} key={item.id} />;
  });
  return (
    <Section id="merch">
      <div className={styles.merchWrap}>
        <div className={styles.merchContainer}>{merchList}</div>
      </div>
    </Section>
  );
};

export default Merch;
