import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import Card from "../../UI/Card";
import Section from "../../UI/Section";
import PozorumeniPhoto from "../../UI/PozorumeniPhoto";

import styles from "./Pozorumeni.module.css";

const Pozorumeni = (props) => {
  return (
    <Section className={styles.pozorumeni} id="pozorumeni">
      <Card className={styles["pozorumeni"]}>
        <PozorumeniPhoto
          wideClass={styles["pozorumeni-left"]}
          squareClass={styles["pozorumeni-left__square"]}
        />
        <div className={styles["pozorumeni-right"]}>
          <div>
            <h3>PozorUmění</h3>
            <p>
              PozorUmění začalo jako galerijní sekce festivalu Žižkovská noc
              naplno fungovat v květnu 2021 pod zastřešujícím ročním tématem
              identita–diverzita–komunita. Od té chvíle uspořádal náš tým více
              než 15 výstav a doprovodných programů.
            </p>
            <p>
              Během Jarní Žižkovské noci ve dnech 25. a 26.3. představíme v
              prostorech podniků Medium43 a Bar Cíl tvorbu dvou autorů, kteří se
              liší věkem, pohlavím i zpracovávanými tématy, přesto je ale jedno
              spojuje – nemají za sebou akademické umělecké vzdělání.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/pozorumeni/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/pozorumeni"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Pozorumeni;
