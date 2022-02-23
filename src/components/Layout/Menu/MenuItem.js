import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const menuClickHandler = event => {
    props.onMenuClick(event.target.id)
  }

  return (
    <li className={styles.menuItem}>
      <span onClick={menuClickHandler} id={props.link}>{props.children}</span>
    </li>
  );
};

export default MenuItem;
