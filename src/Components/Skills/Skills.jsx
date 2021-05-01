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
            <div>
                <HTMLIcon />
                <CSSIcon />
                <JavascriptIcon />
                <ReactIcon />
                <ReduxIcon />
                <NodeIcon />
                <ExpressIcon />
                <PostgreSQLIcon />
            </div>
        </StyledSkills>
    )
}

export default Skills;