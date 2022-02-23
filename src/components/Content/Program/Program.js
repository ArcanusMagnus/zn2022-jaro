import { useEffect, useState } from 'react';

import ProgramDay from './ProgramDay';
import Section from '../../UI/Section';

import styles from './Program.module.css';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
};

const Program = props => {
    const [dimensions, setDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setDimensions(getWindowDimensions());
        }
        // maybe add a timer?
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    console.log(dimensions);

    return <Section className={styles.program} id="program">
        <ProgramDay day="friday" />
        <ProgramDay day="saturday" />
    </Section>
}

export default Program;