import React from 'react';
import { StyledAbout } from './StyledAbout';

const About = () => {
    return (
        <StyledAbout>
            <h1 dataText="Santiago Molina">Santiago Molina</h1>
            <p className='subtitle'>Fullstack developer</p>
            <p>Hola! Soy desarrollador en javascript y estudiante de ingeniería en sistemas. Me apasiona la tecnología, el desarrollo frontend y backend. Comencé de forma autodidacta y luego cursé un bootcamp de 700 hs de estudio donde aprendí principalemte Javascript, React, Node, Express y SQL mediante la creación de diversos proyectos. Actualmente estoy en busqueda de mi primer trabajo en el ambiente IT.</p>
            <button className='btn'>Descargar CV</button>
        </StyledAbout>
    )
}

export default About;