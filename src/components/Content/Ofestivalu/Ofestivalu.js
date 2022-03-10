import Section from "../../UI/Section";
import Card from "../../UI/Card";
import Links from "./Links";
import SignUpContainer from "./SignUpContainer";
import AtmoPhoto from "../../UI/AtmoPhoto";

import styles from "./Ofestivalu.module.css";
import links from "../../../data/Links.json";

const Ofestivalu = (props) => {
  return (
    <Section>
      <Card className={styles.ofestivalu}>
        <AtmoPhoto squareClass={styles["ofestivalu-left"]} />
        <div className={styles["ofestivalu-right"]}>
          <h3>#Neznámehranice</h3>
          <p>
            A proto pro vás poslední roky připravujeme akce i mimo tři dny, kdy
            všichni korzujeme Žižkovem. Kultura se proměňuje, my se posouváme s
            ní. I za hranice Žižkova, do online prostoru. ŽN365 představuje v
            průběhu celého roku kulturní program, live koncerty, výstavy
            #PozorUmění a Vysílač – podcast, který odráží hodnoty festivalu.
          </p>
          <p>
            Chceš mít všechno z první ruky? Sleduj nás na našich sociálních
            sítích.
          </p>
          <Links links={links} />
          <SignUpContainer />
        </div>
      </Card>
    </Section>
  );
};

export default Ofestivalu;
