import React from 'react';
import Carousel from '../Carousel/Carousel';
import { StyledProjects } from './StyledProjects';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <StyledProjects>
            <Fade bottom><h1>Proyectos</h1></Fade>
            <Fade bottom>
                <div className='container'>

                    <div className='description'>
                        <h2>Arthub</h2>
                        <p>E-commerce de venta de obras de arte Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize, Firebase, PostgreSQL y autenticación mediante JWT.
                    </p>
                        <button className='btn'>Repositorio</button>
                    </div>
                    <div className='images'>
                        <Carousel />

                    </div>
                </div>
                <div className='container'>

                    <div className='description'>
                        <h2>PI - Dogs</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque veritatis blanditiis cumque at consectetur? Aperiam voluptatum iure nostrum. Quaerat doloremque dolorem veniam temporibus reprehenderit eius voluptas ab similique rerum?</p>
                        <button className='btn'>Repositorio</button>
                        <button className='btn'>Ver demo</button>
                    </div>
                    <div className='images'>


                    </div>
                </div>
                <div className='container'>

                    <div className='description'>
                        <h2>App-Clima</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque veritatis blanditiis cumque at consectetur? Aperiam voluptatum iure nostrum. Quaerat doloremque dolorem veniam temporibus reprehenderit eius voluptas ab similique rerum?</p>
                        <button className='btn'>Repositorio</button>
                        <button className='btn'>Ver demo</button>
                    </div>
                    <div className='images'>


                    </div>
                </div>
            </Fade>
        </StyledProjects>
    )
}

export default Projects;
