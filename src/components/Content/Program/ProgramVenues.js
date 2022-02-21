import styles from "./ProgramVenues.module.css";

const ProgramVenues = (props) => {
  return (
    <li className={styles.programVenue}>
      <h3>{props.venueName}</h3>
      <ul>{props.children}</ul>
    </li>
  );
};

export default ProgramVenues;
