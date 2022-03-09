import styles from "./ProgramItem.module.css";

const ProgramItem = (props) => {
  return (
    <li className={styles.programItem}>
      <span className={styles['programItem-time']}>
        {props.show.startTime} 
      </span>
      &nbsp;
      <span>
        <a href={props.show.link}>{props.show.name}</a>
        &nbsp;
        <span>({props.show.genre})</span>
      </span>
    </li>
  );
};

export default ProgramItem;
