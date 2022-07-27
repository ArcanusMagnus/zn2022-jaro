import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import Card from "../UI/Card";
import Section from "../UI/Section";
import AtmoPhoto from "../UI/AtmoPhoto";
import Button from "../UI/Button";
import Tickets from "../Tickets/Tickets";

import styles from "./HraniceNew.module.css";

const HraniceNew = (props) => {
  const [ticketsActive, setTicketsActive] = useState(false);

  const ticketsClickHandler = () => {
    setTicketsActive((prevState) => !prevState);
  };

  const content = (
    <>
      <Card className={styles.hranice}>
        <AtmoPhoto
          wideClass={styles["hranice-left"]}
          squareClass={styles["hranice-left__square"]}
        />

        <h2>Žižkovská noc</h2>
        <p>
          Žižkovská noc tradičně proměňuje celý Žižkov v živý organismus, ve
          kterém proudí tisíce lidí a vydávají se prozkoumávat nové i známé
          kapely napříč všemi žánry. Na konci září se budete moct opět vydat do
          žižkovských ulic a zažít jedinečný festival podle toho, jakou cestou
          se vydáte. Mimo rozmanité koncerty nabídne Žižkovská noc i bohatý
          doprovodný program protkaný aktivitami našich festivalových sekcí –
          podcastu Vysílač a galerijní sekce PozorUmění.
        </p>
        <p>
          Sekce PozorUmění už nyní vyhlásila open call k letošnímu{" "}
          <a
            href="https://www.google.com/url?q=https://www.facebook.com/events/371067648260460/?acontext%3D%257B%2522event_action_history%2522%253A%5B%257B%2522mechanism%2522%253A%2522search_results%2522%252C%2522surface%2522%253A%2522search%2522%257D%5D%252C%2522ref_notif_type%2522%253Anull%257D&sa=D&source=docs&ust=1649839808381563&usg=AOvVaw0eV9UoXFDJS3kHzr78cpQI"
            target="_blank"
            rel="noreferrer"
          >
            Galerijnímu podzimu
          </a>
          , do kterého se mohou až do 1. července hlásit začínající tvůrci i
          etablovaní umělci. Jejich díla pak uvidíte mezi 15. zářím a 13. říjnem
          v žižkovských galeriích.
        </p>
        <p>
          Každé dva týdny si také můžete poslechnout Vysílač, který přenáší
          hodnoty festivalu za hranice Žižkova a prozkoumává tak v rozhovorech
          společenské problémy kolem nás. Poslouchejte Vysílač{" "}
          <Link to="/vysilac">zde</Link>, nebo na{" "}
          <a
            href="https://open.spotify.com/show/3KobdopDV4BUkr9khhzTmf"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>{" "}
          a v aplikaci{" "}
          <a
            href="https://podcasts.apple.com/cz/podcast/vys%C3%ADla%C4%8D/id1538409505"
            target="_blank"
            rel="noreferrer"
          >
            Apple Podcasty
          </a>
          .
        </p>
        <p>
          <br />
          <Button onClick={ticketsClickHandler} className={styles.buyTickets}>
            <FontAwesomeIcon icon={faTicket} /> Kup vstupenky!
          </Button>
        </p>
      </Card>
      {ticketsActive && <Tickets />}
    </>
  );
  return (
    <Section className={styles.landing} id="home">
      {content}
    </Section>
  );
};

export default HraniceNew;
