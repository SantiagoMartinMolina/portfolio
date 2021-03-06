import React from 'react';
import { StyledSkills } from './StyledSkills';
import ReactIcon from '../../icons/ReactIcon';
import HTMLIcon from '../../icons/HTMLIcon';
import CSSIcon from '../../icons/CSSIcon';
import JavascriptIcon from '../../icons/JavascriptIcon';
import ReduxIcon from '../../icons/ReduxIcon';
import NodeIcon from '../../icons/NodeIcon';
import ExpressIcon from '../../icons/ExpressIcon';
import PostgreSQLIcon from '../../icons/PostgreSQL';
import Fade from 'react-reveal/Fade';

const Skills = () => {

    return (
        <StyledSkills id='habilidades'>
            <Fade bottom>
                <h1>Habilidades</h1>
            </Fade>
            <div className='icons-container'>
                <Fade bottom>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <HTMLIcon />
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <CSSIcon />
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <JavascriptIcon />
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <ReactIcon />
                            <h3>React</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <ReduxIcon />
                            <h3>Redux</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <NodeIcon />
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <ExpressIcon />
                            <h3>Express</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <PostgreSQLIcon />
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </Fade>
            </div>
        </StyledSkills>
    )
}

export default Skills;