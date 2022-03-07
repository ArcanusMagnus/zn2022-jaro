import { useState } from "react";

import Menu from "./Menu/Menu";
import useScreenResolution from "../../hooks/use-resolution";

import styles from "./Header.module.css";
import navLogo from "../../assets/images/nav_logo.png";

const Header = (props) => {
  const { width } = useScreenResolution();
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerClickHandler = (event) => {
    setBurgerActive((prevState) => {
      return !prevState;
    });
  };

  const menuClickHandler = (event) => {
    burgerClickHandler();
    props.onMenuClick(event);
  }

  const logoClickHandler = () => {
    document.location.reload();
  }

  const burgerClasses = styles.burger + ((burgerActive) ? (' ' + styles['burger-open']) : '');

  const burger = (
    <div className={burgerClasses} onClick={burgerClickHandler}>
      <span className={styles['burger-topBar']}></span>
      <span className={styles['burger-middleBar']}></span>
      <span className={styles['burger-bottomBar']}></span>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header-left"]}>
          <img src={navLogo} alt="Žižkovská noc logo" onClick={logoClickHandler}/>
          <p className={styles["header-left__date"]}>25. a 26. března</p>
        </div>
        {width < 1350 && burger}
        {width >= 1350 && (
          <Menu onMenuClick={props.onMenuClick} mobileMenu={false} />
        )}
      </header>
      {width < 1350 && (
        <Menu onMenuClick={menuClickHandler} mobileMenu={true} open={burgerActive} />
      )}
    </>
  );
};

export default Header;
