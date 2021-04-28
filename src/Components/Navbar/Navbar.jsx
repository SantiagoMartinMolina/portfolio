import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <StyledNavbar>
            <div className='container'>
                <ul>
                    <li><a href='#proyectos'>Proyectos</a></li>
                    <li><a href='#habilidades'>Habilidades</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;