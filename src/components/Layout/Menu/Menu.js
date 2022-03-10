import { useState } from "react";

import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";

const Menu = (props) => {
  const [currentSection, setCurrentSection] = useState("/");

  const menuClickHandler = (event) => {
    console.log(event);
    setCurrentSection(event);
    props.onMenuClick(event);
  };

  let menuType = props.mobileMenu ? styles.mobileMenu : styles.menu;
  if (props.open) {
    menuType += " " + styles.active;
  }
  // maybe add localstorage or cookie about current position
  return (
    <ul className={menuType}>
      <MenuItem
        link="/"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        Neznáme hranice
      </MenuItem>
      <MenuItem
        link="/program"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        Program
      </MenuItem>
      {/* <MenuItem
        link="merch"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        Merchandise
      </MenuItem> */}
      <MenuItem
        link="/vysilac"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        Vysílač
      </MenuItem>
      <MenuItem
        link="/pozorumeni"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        PozorUmění
      </MenuItem>
      <MenuItem
        link="/about"
        onMenuClick={menuClickHandler}
        currentSection={currentSection}
      >
        O festivalu
      </MenuItem>
    </ul>
  );
};

export default Menu;
