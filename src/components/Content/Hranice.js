import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Section from "../UI/Section";
import AtmoPhoto from "../UI/AtmoPhoto";

import styles from "./Hranice.module.css";

const Hranice = (props) => {
  return (
    <Section className={styles.landing} id="home">
      <Card className={styles.hranice}>
        <AtmoPhoto
          wideClass={styles["hranice-left"]}
          squareClass={styles["hranice-left__square"]}
        />
        <div className={styles["hranice-right"]}>
          <div>
            <h2>Jarní Žižkovská noc</h2>
            <p>
              Žižkovská noc tradičně přeměňuje celý Žižkov v živý organizmus, ve
              kterém proudí tisíce lidí a vydávají se prozkoumávat nové i známé
              kapely napříč všemi žánry. 25. a 26. března si chceme připomenout
              termín, ve kterém Žižkovská noc vždy probíhala, a proto jsme si
              pro vás připravili jarní, menší verzi festivalu. Mimo hudební
              program nabídne Jarní Žižkovská noc i workshopy, literární
              vystoupení, výstavy a živý díl našeho podcastu Vysílač.
            </p>
            {/* <Button>
              <a
                href="https://goout.net/cs/jarni-zizkovska-noc-2022/szdkhbt/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTicket} /> Kup vstupenky!
              </a>
            </Button> */}
            <Link to="/tickets">
              <Button
                onClick={props.onTicketsClick}
                className={styles.buyTickets}
              >
                <FontAwesomeIcon icon={faTicket} /> Kup vstupenky!
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Hranice;
