import React from 'react';
import { StyledSkills } from './StyledSkills';
import { NavLink } from 'react-router-dom';
import ReactIcon from '../../icons/ReactIcon';
import HTMLIcon from '../../icons/HTMLIcon';
import CSSIcon from '../../icons/CSSIcon';
import JavascriptIcon from '../../icons/JavascriptIcon';
import ReduxIcon from '../../icons/ReduxIcon';
import NodeIcon from '../../icons/NodeIcon';
import ExpressIcon from '../../icons/ExpressIcon';
import PostgreSQLIcon from '../../icons/PostgreSQL';

const Skills = () => {
    return (
        <StyledSkills>
            <h2>Habilidades</h2>
            <div className='icons-container'>
                <div>
                    <HTMLIcon />
                    <h3>HTML</h3>
                </div>
                <div>
                    <CSSIcon />
                    <h3>CSS</h3>
                </div>
                <div>
                    <JavascriptIcon />
                    <h3>Javascript</h3>
                </div>
                <div>
                    <ReactIcon />
                    <h3>React</h3>
                </div>
                <div>
                    <ReduxIcon />
                    <h3>Redux</h3>
                </div>
                <div>
                    <NodeIcon />
                    <h3>NodeJS</h3>
                </div>
                <div>
                    <ExpressIcon />
                    <h3>Express</h3>
                </div>
                <div>
                    <PostgreSQLIcon />
                    <h3>PostgreSQL</h3>
                </div>
            </div>
        </StyledSkills>
    )
}

export default Skills;