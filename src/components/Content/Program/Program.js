import { useState, useEffect } from "react";

import ProgramDay from "./ProgramDay";
import Section from "../../UI/Section";

import styles from "./Program.module.css";

const Program = (props) => {
  const [bandsFriday, setBandsFriday] = useState([]);
  const [bandsSaturday, setBandsSaturday] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  let content;

  useEffect(() => {
    const fetchProgram = async () => {
      const response = await fetch("http://89.221.219.23:8080/bands/");

      if (!response.ok) {
        throw new Error("Načtení kapel selhalo.");
      }

      const bandData = await response.json();

      if (!bandData.body || bandData.body.length === 0) {
        throw new Error("Neplatná data, načítání kapel selhalo.");
      }
      const loadedBandsFriday = [];
      const loadedBandsSaturday = [];
      for (const band of bandData.body) {
        if (band.day === "25-03-2022") {
          loadedBandsFriday.push(band);
        }
        if (band.day === "26-03-2022") {
          loadedBandsSaturday.push(band);
        }
      }

      let fridayVenues = [];
      for(const band of loadedBandsFriday){
        if(!fridayVenues.find(venue => venue.venue === band.venue)){
          fridayVenues.push({venue: band.venue, venue_no: band.venue_no, bands: [band]});
        } else{
          let venuePointer = fridayVenues.find(venue => venue.venue === band.venue);
          venuePointer.bands.push(band);
        }
      }

      let saturdayVenues = [];
      for(const band of loadedBandsSaturday){
        if(!saturdayVenues.find(venue => venue.venue === band.venue)){
          saturdayVenues.push({venue: band.venue, venue_no: band.venue_no, bands: [band]});
        } else{
          let venuePointer = saturdayVenues.find(venue => venue.venue === band.venue);
          venuePointer.bands.push(band);
        }
      }

      fridayVenues = fridayVenues.sort((a,b) => a.venue_no - b.venue_no);
      saturdayVenues = saturdayVenues.sort((a,b) => a.venue_no - b.venue_no);

      setBandsFriday(fridayVenues);
      setBandsSaturday(saturdayVenues);
      setIsLoading(false);
    };

    fetchProgram().catch((err) => {
      setIsLoading(false);
      setHasError(err.message);
    });
  }, []);

  if (isLoading) {
    content = (
      <div>
        <p>Načítám program...</p>
      </div>
    );
  }

  if (hasError) {
    content = (
      <div>
        <p>{hasError}</p>
      </div>
    );
  }

  if (!isLoading && !hasError) {
    content = (
      <>
        <ProgramDay day="friday" bands={bandsFriday} />
        <ProgramDay day="saturday" bands={bandsSaturday} />
      </>
    );
  }

  return (
    <Section className={styles.program} id="program">
      {content}
    </Section>
  );
};

export default Program;
