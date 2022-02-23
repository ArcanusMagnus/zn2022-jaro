import Section from "../../UI/Section";
import Card from "../../UI/Card";
import Links from "./Links";

import styles from "./Ofestivalu.module.css";
import links from "../../../data/Links.json";
import SignUpForm from "./SignUpForm";

const Ofestivalu = (props) => {
  return (
    <Section className={styles.ofestivalu} id="footer">
      <Card className={styles.neznamehranice}>
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
      </Card>
      <SignUpForm />
    </Section>
  );
};

export default Ofestivalu;
