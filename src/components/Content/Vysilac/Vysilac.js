import VysilacPlayer from "./VysilacPlayer";
import Card from "../../UI/Card";
import Section from "../../UI/Section";

import styles from "./Vysilac.module.css";

const Vysilac = (props) => {
  return (
    <Section className={styles.vysilac} id="vysilac">
      <Card className={styles["vysilac-player"]}>
          <h3>Vysílač</h3>
        <p className={styles['vysilac-description']}>
          Festival Žižkovská Noc je světem, v němž není místo pro jakoukoliv
          formu diskriminace. Podcast Vysílač chce tento svět rozšířit za
          hranice žižkovských a holešovických ulic. Dáváme prostor tématům
          odrážející hodnoty festivalu a lidem, kteří jim rozumí. Moderují
          Tereza Butková, Petra Mikolášová a Františka Tranová. Znělka a edit
          Jonáš Kucharský.
        </p>
        <VysilacPlayer />
      </Card>
    </Section>
  );
};

export default Vysilac;
