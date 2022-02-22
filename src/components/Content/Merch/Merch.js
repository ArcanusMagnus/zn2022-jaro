import MerchItem from "./MerchItem";

import styles from "./Merch.module.css";
import merch from "../../../data/Merch.json";

const Merch = (props) => {
  const merchList = merch.Merch.map((item) => {
    return (
      <MerchItem item={item} key={item.id}/>
    );
  });
  return <section className={styles.merch} id="merch">
      {merchList}
  </section>;
};

export default Merch;
