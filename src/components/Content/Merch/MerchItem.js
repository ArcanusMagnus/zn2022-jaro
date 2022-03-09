import Button from "../../UI/Button";
import Card from "../../UI/Card";

import styles from "./MerchItem.module.css";

const MerchItem = (props) => {
  const backgroundColors = [
    "#ED5664",
    "#A592C5",
    "#50C1E8",
    "#A1CF69",
  ];
  const colorIndex = Math.floor(Math.random() * backgroundColors.length);
  const backroundColor = backgroundColors[colorIndex];
  const photoPath = props.item.photo

  // needs better, dynamic solution
  return (
    <Card
      className={styles.merchItem}
      style={{ backgroundColor: backroundColor }}
    >
      <h3>{props.item.name}</h3>
      <div
        className={styles["merchItem-photo"]}
        style={{ backgroundImage: `url(${photoPath})`, backgroundSize: `cover`}}
      ></div>
      <div className={styles['merchItem-buy']}>
        <span className={styles['merchItem-buy__price']}>{props.item.price} Kč</span>
        <Button className={styles['merchItem-buy__button']}><a href={props.item.link} target="_blank" rel="noreferrer">Koupit</a></Button>
      </div>
    </Card>
  );
};

export default MerchItem;
