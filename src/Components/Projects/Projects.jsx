import React from 'react';
import Carousel from '../Carousel/Carousel';
import { StyledProjects } from './StyledProjects';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <StyledProjects id='proyectos'>
            <Fade bottom><h1>Proyectos</h1></Fade>
            <Fade bottom>
                <div className='container'>
                    <div className='description'>
                        <h2>Arthub</h2>
                        <p>E-commerce de venta de obras de arte. Se realizó en grupo, utilizando la metodología SCRUM. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize, Firebase, PostgreSQL y autenticación mediante JWT.
                        </p>
                        <a className='btn' href="https://github.com/SantiagoMartinMolina/PI-Dogs-API" target='_blank' rel='noopener noreferrer'>Ver repositorio</a>
                        <a className='btn' href="https://pi-dogs.vercel.app/" target='_blank' rel='noopener noreferrer'>Ver demo</a>

                    </div>
                    <div className='images'>
                        <Carousel />
                    </div>
                </div>
                <div className='container'>
                    <div className='description'>
                        <h2>PI - Dogs</h2>
                        <p>
                            Proyecto individual fullstack. Consiste en una aplicación que muestra información de todas las razas de perro, dicha información es traida de una API, tambien es posible crear nuevas razas. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize y PostgreSQL.
                        </p>
                        <a className='btn' href="https://github.com/SantiagoMartinMolina/PI-Dogs-API" target='_blank' rel='noopener noreferrer'>Ver repositorio</a>
                        <a className='btn' href="https://pi-dogs.vercel.app/" target='_blank' rel='noopener noreferrer'>Ver demo</a>
                    </div>
                    <div className='images'>
                        <Carousel />


                    </div>
                </div>
                <div className='container'>
                    <div className='description'>
                        <h2>App-Clima</h2>
                        <p>Aplicación web realizada con React. Permite buscar los datos del tiempo meteorológico de cualquier ciudad del mundo. La información es traida de una API.</p>
                        <a className='btn' href="https://github.com/SantiagoMartinMolina/appClima" target='_blank' rel='noopener noreferrer'>Ver repositorio</a>
                        <a className='btn' href="https://app-clima-self.vercel.app/" target='_blank' rel='noopener noreferrer'>Ver demo</a>
                    </div>
                    <div className='images'>
                        <Carousel />
                    </div>
                </div>
            </Fade>
        </StyledProjects>
    )
}

export default Projects;
