import React from 'react';
import { StyledHome } from './StyledHome';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
    return (
        <StyledHome>

            <About />
            <Skills />
            <Projects />

        </StyledHome>
    )
}

export default Home;