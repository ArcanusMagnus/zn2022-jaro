import styles from "./ProgramItem.module.css";

const ProgramItem = (props) => {
  return (
    <li className={styles.programItem}>
      <span className={styles['programItem-time']}>
        {props.show.StartTime} 
      </span>
      <span>
        <a href={props.show.Link}>{props.show.Name}</a> <span>({props.show.Genre})</span>
      </span>
    </li>
  );
};

export default ProgramItem;
