import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import Card from "../../UI/Card";
import Section from "../../UI/Section";

import styles from "./Pozorumeni.module.css";
import image from "../../../assets/images/pozorumeni-bg.jpg";
import square from "../../../assets/images/pozorumeni-square.jpg";

const Pozorumeni = (props) => {
  return (
    <Section className={styles.pozorumeni} id="pozorumeni">
      <Card className={styles["pozorumeni"]}>
        <div className={styles["pozorumeni-left"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["pozorumeni-left__square"]}>
          <img src={square} alt="" />
        </div>
        <div className={styles["pozorumeni-right"]}>
          <div>
            <h3>PozorUmění</h3>
            <p>
              Další novou sekcí Žižkovské noci je i PozorUmění, které se ve svém
              celoročním programu zaměřuje na výtvarné, audiovizuální i
              performativní umění a jeho prezentaci ve formálním (galerijním) i
              neformálním (kavárenském/barovém) prostředí či veřejném prostoru
              Žižkova. PozorUmění se snaží uměleckou tvorbu napříč médii a
              vyjadřovacími prostředky uchopit jako formu komunikace a sdílet ji
              tak veřejnosti.
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
