import ProgramVenues from "./ProgramVenues";
import ProgramItem from "./ProgramItem";

import styles from "./ProgramDay.module.css";
import program from "../../../data/Shows.json";

const ProgramDay = (props) => {
  const classes =
    styles.programDay +
    " " +
    (props.day === "friday"
      ? styles.programDay__friday
      : styles.programDay__saturday);

  const dayCz = props.day === "friday" ? "pátek 25. března" : "sobota 26. března";
  const dayIndex = props.day === "friday" ? 0 : 1;
  const programOfThisDayRaw = program.Days[dayIndex];

  const programOfThisDay = programOfThisDayRaw.Venues.map((venue) => {
    const venueProgram = venue.Shows.map((show) => {
      return <ProgramItem show={show} key={show.Name} />;
    });
    
    return (
      <ProgramVenues venueName={venue.Name} key={venue.Name}>
        {venueProgram}
      </ProgramVenues>
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
