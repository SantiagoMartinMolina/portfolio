import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <StyledNavbar>
            <div className='container'>
                <i class="fas fa-laptop-code"></i>
                <ul>
                    <li><a href='#proyectos'>Proyectos</a></li>
                    <li><a href='#habilidades'>Habilidades</a></li>
                    <li className='contact'><a href='#contacto'>Contacto</a></li>
                    <li><a href='#'><i class="fab fa-twitter-square"></i></a></li>
                    <li><a href='#'><i class="fab fa-github-square"></i></a></li>
                    <li><a href='#'><i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;