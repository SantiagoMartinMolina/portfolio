import React from 'react';
import { StyledHome } from './StyledHome';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Fade from 'react-reveal/Fade';


const Home = () => {
    return (
        <StyledHome>
            <Fade>

                <About />
                <Skills />
                <Projects />
            </Fade>
        </StyledHome>
    )
}

export default Home;