import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faSpotify, faApple } from "@fortawesome/free-brands-svg-icons";

import VysilacPlayer from "./VysilacPlayer";
import Card from "../../UI/Card";
import Section from "../../UI/Section";

import styles from "./Vysilac.module.css";
import image from "../../../assets/images/vysilac-bg.jpg";

const Vysilac = (props) => {
  return (
    <Section className={styles.vysilac} id="vysilac">
      <Card className={styles["vysilac-player"]}>
        <div className={styles["vysilac-left"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["vysilac-right"]}>
          <h3>Vysílač</h3>
          <p className={styles["vysilac-description"]}>
            Festival Žižkovská Noc je světem, v němž není místo pro jakoukoliv
            formu diskriminace. Podcast Vysílač chce tento svět rozšířit za
            hranice žižkovských a holešovických ulic. Dáváme prostor tématům
            odrážející hodnoty festivalu a lidem, kteří jim rozumí. Moderují
            Tereza Butková, Petra Mikolášová a Františka Tranová. Znělka a edit
            Jonáš Kucharský.
          </p>
          <VysilacPlayer />
          <div className={styles.socials}>
            <a href="https://www.instagram.com/vysilac/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/vysilac.podcast" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://open.spotify.com/show/3KobdopDV4BUkr9khhzTmf" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify} /></a>
            <a href="https://podcasts.apple.com/cz/podcast/vys%C3%ADla%C4%8D/id1538409505" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faApple} /></a>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Vysilac;
