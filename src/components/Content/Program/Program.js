import ProgramDay from "./ProgramDay";
import Section from "../../UI/Section";

import styles from "./Program.module.css";

const Program = (props) => {
  return (
    <Section className={styles.program} id="program">
      <ProgramDay day="friday" />
      <ProgramDay day="saturday" />
    </Section>
  );
};

export default Program;
