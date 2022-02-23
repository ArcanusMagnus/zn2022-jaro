import Card from "../../UI/Card";
import Section from "../../UI/Section";

import styles from "./Pozorumeni.module.css";

const Pozorumeni = (props) => {
  return (
    <Section className={styles.pozorumeni} id="pozorumeni">
      <Card className={styles["pozorumeni-wrapper"]}>
        <h3>PozorUmění</h3>
        <p>
          Další novou sekcí Žižkovské noci je i PozorUmění, které se ve svém
          celoročním programu zaměřuje na výtvarné, audiovizuální i
          performativní umění a jeho prezentaci ve formálním (galerijním) i
          neformálním (kavárenském/barovém) prostředí či veřejném prostoru
          Žižkova. PozorUmění se snaží uměleckou tvorbu napříč médii a
          vyjadřovacími prostředky uchopit jako formu komunikace a sdílet ji tak
          veřejnosti.
        </p>
      </Card>
    </Section>
  );
};

export default Pozorumeni;
