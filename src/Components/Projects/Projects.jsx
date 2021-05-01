import React from 'react';
import { StyledProjects } from './StyledProjects';

const Projects = () => {
    return (
        <StyledProjects>
            <h1>Proyectos</h1>
            <div className='container'>

                <div className='description'>
                    <h2>Ecommerce</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque veritatis blanditiis cumque at consectetur? Aperiam voluptatum iure nostrum. Quaerat doloremque dolorem veniam temporibus reprehenderit eius voluptas ab similique rerum?</p>
                </div>
                <div className='images'>

                    <div className='img-cont'>
                        <img src="https://images.unsplash.com/photo-1619744086975-2c6e1a55c502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    </div>

                    <button className='btn'>Repositorio</button>

                </div>
            </div>
            <div className='container'>

                <div className='description'>
                    <h2>PI - Dogs</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque veritatis blanditiis cumque at consectetur? Aperiam voluptatum iure nostrum. Quaerat doloremque dolorem veniam temporibus reprehenderit eius voluptas ab similique rerum?</p>
                </div>
                <div className='images'>
                    <div className='img-cont'>
                        <img src="https://images.unsplash.com/photo-1619744086975-2c6e1a55c502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    </div>
                    <button className='btn'>Repositorio</button>
                    <button className='btn'>Ver demo</button>

                </div>
            </div>
            <div className='container'>

                <div className='description'>
                    <h2>App-Clima</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque veritatis blanditiis cumque at consectetur? Aperiam voluptatum iure nostrum. Quaerat doloremque dolorem veniam temporibus reprehenderit eius voluptas ab similique rerum?</p>
                </div>
                <div className='images'>
                    <div className='img-cont'>
                        <img src="https://images.unsplash.com/photo-1619744086975-2c6e1a55c502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    </div>
                    <button className='btn'>Repositorio</button>
                    <button className='btn'>Ver demo</button>

                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects;
