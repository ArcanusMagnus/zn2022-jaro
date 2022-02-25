import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Section from "../UI/Section";

import styles from "./Hranice.module.css";

const Hranice = (props) => {
  return (
    <Section className={styles.landing} id="home">
      <Card className={styles.hranice}>
        <h2>Jarní Žižkovská noc</h2>
        <p>
          Žižkovská noc tradičně přeměňuje celý Žižkov v živý organizmus, ve
          kterém proudí tisíce lidí a vydávají se prozkoumávat nové i známé
          kapely napříč všemi žánry. 25. a 26. března si chceme připomenout
          termín, ve kterém Žižkovská noc vždy probíhala, a proto jsme si pro
          vás připravili jarní, menší verzi festivalu. Mimo hudební program
          nabídne Jarní Žižkovská noc i workshopy, literární vystoupení, výstavy
          a živý díl našeho podcastu Vysílač.
        </p>
        <Button onClick={props.onTicketsClick}>
          Kup vstupenky! <FontAwesomeIcon icon={faTicket} />
        </Button>
      </Card>
    </Section>
  );
};

export default Hranice;
