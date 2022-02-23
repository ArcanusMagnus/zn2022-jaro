import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return <ul className={styles.menu}>
      <MenuItem link={'#home'}>#Neznáme hranice</MenuItem>
      <MenuItem link={'#vstupenky'}>Vstupenky</MenuItem>
      <MenuItem link={'#program'}>Program</MenuItem>
      <MenuItem link={'#merch'}>Merchandise</MenuItem>
      <MenuItem link={'#vysilac'}>Vysílač</MenuItem>
      <MenuItem link={'#pozorumeni'}>PozorUmění</MenuItem>
      <MenuItem link={'#footer'}>O festivalu</MenuItem>
  </ul>;
};

export default Menu;
