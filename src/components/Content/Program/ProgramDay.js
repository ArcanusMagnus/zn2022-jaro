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
  for(const venue of programOfThisDayRaw){
    venue.bands.sort((a,b) => {
      let timeA = a.startTime.split(':');
      let timeAValue = +timeA[0] * 60 + +timeA[1];
      let timeB = b.startTime.split(':');
      let timeBValue = +timeB[0] * 60 + +timeA[1];
      return timeAValue >= timeBValue ? 1 : -1
    });
  }

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
