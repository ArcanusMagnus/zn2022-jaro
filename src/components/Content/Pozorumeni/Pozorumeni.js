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
              15. září až 13. října proběhne Galerijní podzim #2 s ústředním
              tématem “možnosti spolupráce”. Chceme dát příležitost co nejširší
              škále umělců, autorů, tvůrců či kolektivů, proto vyhlašujeme open
              call, do kterého se mohou zájemci přihlašovat až do 1. července.
              Všechny potřebné informace najdete na <a href="https://www.facebook.com/events/371067648260460" target="_blank" rel="noreferrer">FB události</a> nebo nám napište
              na <a href="mailto:pozorumeni@zizkovskanoc.net">pozorumeni@zizkovskanoc.net</a>, kam nám můžete posílat vaše práce.
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
