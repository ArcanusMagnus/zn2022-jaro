import styles from "./HeadContainer.module.css";
import headerPhoto from "../../assets/images/header-bg.jpg";

const HeadContainer = (props) => {
    // TODO: maybe turn into a slideshow later
  return (
    <section className={styles.headContainer}  id="home">
      <img
        src={headerPhoto}
        alt="Žižkovská noc logo"
      />
      {props.children}
    </section>
  );
};

export default HeadContainer;
