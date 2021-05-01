import React from 'react';
import { StyledContactForm } from './StyledContactForm';

const ContactForm = () => {
    return (
        <StyledContactForm>
            <div className='container'>
                <h1>
                    Contacto
                </h1>
                <form>
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Email' />
                    <textarea type="text" placeholder='Mensaje' />
                    <button className='btn' type="submit">Enviar</button>
                </form>
            </div>
            <div className='social-media'>
                <a href='#'><i class="fab fa-twitter-square"></i></a>
                <a href='#'><i class="fab fa-github-square"></i></a>
                <a href='#'><i class="fab fa-linkedin"></i></a>
                {/* <p><a><i class="fas fa-envelope-open-text"></i></a>
                    <span>molina.santiago.martin@gmail.com</span></p> */}
                <p>Hecho por Santiago Martin Molina 2021 </p>
            </div>
        </StyledContactForm>
    )
}

export default ContactForm;