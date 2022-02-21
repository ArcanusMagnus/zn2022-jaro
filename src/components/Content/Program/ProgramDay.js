import styles from "./ProgramDay.module.css";
import program from "../../../data/Shows.json";

const ProgramDay = (props) => {
  const classes =
    styles.programDay +
    " " +
    (props.day === "friday"
      ? styles.programDay__friday
      : styles.programDay__saturday);

  const dayCz = props.day === "friday" ? "Pátek" : "Sobota";
  const dayIndex = props.day === "friday" ? 0 : 1;
  const programOfThisDayRaw = program.Days[dayIndex];

  const programOfThisDay = programOfThisDayRaw.Venues.map((venue) => {
    const venueProgram = venue.Shows.map((show) => {
      return (
        <li>
          <div>
            <span>
              {show.StartTime} - {show.EndTime}
            </span>
            <span>
              <a href={show.Link}>{show.Name}</a>
            </span>
            <span> ({show.Genre})</span>
          </div>
        </li>
      );
    });
    return (
      <li>
        <h3>{venue.Name}</h3>
        <ul>{venueProgram}</ul>
      </li>
    );
  });

  return (
    <div className={classes}>
      <h2>{dayCz}</h2>
      <ul>{programOfThisDay}</ul>
    </div>
  );
};

export default ProgramDay;
