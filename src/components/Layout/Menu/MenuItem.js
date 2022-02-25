import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const menuClickHandler = event => {
    props.onMenuClick(event.target.id)
  }

  let classes = styles.menuItem;

  if(props.currentSection === props.link){
    classes += ' ' + styles['menuItem-active'];
  }

  return (
    <li className={classes}>
      <span onClick={menuClickHandler} id={props.link}>{props.children}</span>
    </li>
  );
};

export default MenuItem;
