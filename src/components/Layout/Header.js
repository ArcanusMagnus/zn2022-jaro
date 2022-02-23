import Menu from "./Menu/Menu";

import styles from "./Header.module.css";
import navLogo from "../../assets/images/nav_logo.png";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["header-left"]}>
          <img src={navLogo} alt="Žižkovská noc logo" />
          <p className={styles['header-left__date']}>25. / 26.3.2022</p>
        </div>
        <Menu onMenuClick={props.onMenuClick} />
      </header>
    </>
  );
};

export default Header;
