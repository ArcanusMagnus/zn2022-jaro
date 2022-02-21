import ProgramDay from './ProgramDay';

import styles from './Program.module.css';

const Program = props => {
    return <section className={styles.program} id="program">
        <ProgramDay day="friday" />
        <ProgramDay day="saturday" />
    </section>
}

export default Program;