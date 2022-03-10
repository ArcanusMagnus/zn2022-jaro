import styles from "./ProgramItem.module.css";

const ProgramItem = (props) => {
  let link;
  if(props.show.link === ''){
    link = props.show.name;
  } else {
    link = <a href={props.show.link} target="_blank" rel="noreferrer">{props.show.name}</a>
  }
  return (
    <li className={styles.programItem}>
      <span className={styles['programItem-time']}>
        {props.show.startTime} 
      </span>
      &nbsp;
      <span>
        {link}
        &nbsp;
        <span>({props.show.genre})</span>
      </span>
    </li>
  );
};

export default ProgramItem;
