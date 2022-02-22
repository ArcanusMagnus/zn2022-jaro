import Button from "../../UI/Button";
import Card from "../../UI/Card";

import styles from "./MerchItem.module.css";

import p1 from "../../../assets/images/merch/p1.jpg";
import t1 from "../../../assets/images/merch/t1.jpg";
import t2 from "../../../assets/images/merch/t2.jpg";
import t3 from "../../../assets/images/merch/t3.jpg";
import t4 from "../../../assets/images/merch/t4.jpg";
import t5 from "../../../assets/images/merch/t5.jpg";

const MerchItem = (props) => {
  const backgroundColors = [
    "#FFCF56",
    "#ED5664",
    "#A592C5",
    "#50C1E8",
    "#A1CF69",
  ];
  const colorIndex = Math.floor(Math.random() * backgroundColors.length);
  const backroundColor = backgroundColors[colorIndex];

  console.log(colorIndex);

  // needs better, dynamic solution
  return (
    <Card
      className={styles.merchItem}
      style={{ backgroundColor: backroundColor }}
    >
      <h3>{props.item.Name}</h3>
      <div
        className={styles["merchItem-photo"]}
        style={{ backgroundImage: `url(${p1})` }}
      ></div>
      <div className={styles['merchItem-buy']}>
        <span className={styles['merchItem-buy__price']}>{props.item.Price} Kč</span>
        <Button>Koupit</Button>
      </div>
    </Card>
  );
};

export default MerchItem;
