import ProgramVenues from "./ProgramVenues";
import ProgramItem from "./ProgramItem";

import styles from "./ProgramDay.module.css";

const ProgramDay = (props) => {
  const classes =
    styles.programDay +
    " " +
    (props.day === "friday"
      ? styles.programDay__friday
      : styles.programDay__saturday);

  const dayCz =
    props.day === "friday" ? "pátek 25. března" : "sobota 26. března";
  const programOfThisDayRaw = props.bands;

  const programOfThisDay = programOfThisDayRaw.map((venue) => {
    const venueProgram = venue.bands.map((show) => {
      return <ProgramItem show={show} key={show._id} />;
    });

    return (
      <ProgramVenues venueName={venue.venue} key={venue.venue}>
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
