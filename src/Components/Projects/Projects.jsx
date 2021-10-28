import React from 'react';
import Carousel from '../Carousel/Carousel';
import { StyledProjects } from './StyledProjects';
import Fade from 'react-reveal/Fade';
import { clima, dogs, movye } from '../../Helpers/CarouselData';
import ReactPlayer from 'react-player';

const Projects = () => {
    return (
        <StyledProjects id='proyectos'>
            <Fade bottom><h1>Proyectos</h1></Fade>
            <Fade bottom>
                <div className='container'>
                    <div className='description'>
                        <h2>Movye</h2>
                        <p>
                            Aplicación web para buscar películas, ordenar y filtrar. También permite agregar películas a "Favorites" y "Watchlist". La información es traída de <a className='api-link' href='https://www.themoviedb.org/documentation/api' target='_blank' rel='noopener noreferrer'>The Movie DB</a>. El proyecto fue realizado junto con <a className='api-link' href="https://github.com/Aglowkeys" target='_blank' rel='noopener noreferrer'>Emiliano Alfonso</a> y las tecnologías utilizadas fueron Next.js y styled components.
                        </p>
                        <a className='btn' href="https://github.com/SantiagoMartinMolina/Movye" target='_blank' rel='noopener noreferrer'>Ver repositorio</a>
                        <a className='btn' href="https://movye.vercel.app/" target='_blank' rel='noopener noreferrer'>Ver demo</a>
                    </div>
                    <div className='images'>
                        <Carousel images={movye} />
                    </div>
                </div>
                <div className='container'>
                    <div className='description'>
                        <h2>Arthub</h2>
                        <p>E-commerce de venta de obras de arte. Se realizó en grupo, utilizando la metodología SCRUM. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize, Firebase, PostgreSQL y autenticación mediante JWT.
                        </p>
                        <a className='btn' href="https://github.com/SantiagoMartinMolina/Arthub" target='_blank' rel='noopener noreferrer'>Ver repositorio</a>
                        <a className='btn' href="https://arthub-project.vercel.app/" target='_blank' rel='noopener noreferrer'>Ver demo</a>

                    </div>
                    <div className='images'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=5oKJpRSD0To'
                            width='100%'
                            controls
                        />
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
                        <Carousel images={dogs} />
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
                        <Carousel images={clima} />
                    </div>
                </div>
            </Fade>
        </StyledProjects>
    )
}

export default Projects;
