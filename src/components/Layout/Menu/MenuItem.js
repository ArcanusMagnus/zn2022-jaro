import { NavLink } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {

  let classes = styles.menuItem;
  const resolved = useResolvedPath(props.link);
  const match = useMatch({path: resolved.pathname, end: true})

  if(match){
    classes += ' ' + styles['menuItem-active'];
  }

  const link = props.link;
  return (
    <li className={classes} onClick={props.onMenuClick}>
      <NavLink to={link}>{props.children}</NavLink>
    </li>
  );
};

export default MenuItem;
