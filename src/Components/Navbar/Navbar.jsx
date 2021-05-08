import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Fade>
                <div className='container'>

                    <div>
                        <i className="fas fa-laptop-code"></i>
                        <ul className='menu'>
                            <li><a className='btn-hover' href='#proyectos'>Proyectos</a></li>
                            <li><a className='btn-hover' href='#habilidades'>Habilidades</a></li>
                            <li className='contact'><a className='btn-hover' href='#contacto'>Contacto</a></li>
                        </ul>
                    </div>

                    <ul className='links'>
                        <li><a href='https://twitter.com/santidev7' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href='https://github.com/SantiagoMartinMolina' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/santiago-molina-dev/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a></li>
                    </ul>

                </div>
            </Fade>
        </StyledNavbar>
    )
}

export default Navbar;