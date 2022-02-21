import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={styles.menuItem}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default MenuItem;
