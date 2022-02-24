import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";

const Menu = (props) => {
  let menuType = props.mobileMenu ? styles.mobileMenu : styles.menu;
  if(props.open){
    menuType += ' ' + styles.active;
  }
  // maybe add localstorage or cookie about current position
  return (
    <ul className={menuType}>
      <MenuItem link="home" onMenuClick={props.onMenuClick}>
        #Neznáme hranice
      </MenuItem>
      <MenuItem link="program" onMenuClick={props.onMenuClick}>
        Program
      </MenuItem>
      <MenuItem link="merch" onMenuClick={props.onMenuClick}>
        Merchandise
      </MenuItem>
      <MenuItem link="vysilac" onMenuClick={props.onMenuClick}>
        Vysílač
      </MenuItem>
      <MenuItem link="pozorumeni" onMenuClick={props.onMenuClick}>
        PozorUmění
      </MenuItem>
      <MenuItem link="about" onMenuClick={props.onMenuClick}>
        O festivalu
      </MenuItem>
    </ul>
  );
};

export default Menu;
