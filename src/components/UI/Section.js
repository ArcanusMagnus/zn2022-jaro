import styles from "./Section.module.css";

const Section = (props) => {
  const classes = styles.section + " " + props.className;

  return (
    <section className={classes} id={props.id}>
      {props.children}
    </section>
  );
};

export default Section;
