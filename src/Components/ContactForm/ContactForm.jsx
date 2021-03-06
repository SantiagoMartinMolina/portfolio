import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { StyledContactForm } from './StyledContactForm';
import Fade from 'react-reveal/Fade';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(false);
        setLoading(true);
        emailjs.sendForm('service_9qico7k', 'template_jit8309', e.target, 'user_L6pDIzPRsaEAd0WOYmj8C')
            .then((result) => {
                setLoading(false);
                setSent(true);
            }, (error) => {
                console.log(error);
            });
        e.target.reset();
    }
    return (
        <StyledContactForm id='contacto'>
            <div className='container'>
                <Fade bottom>
                    <h1>Contacto</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Nombre' name='from_name' required />
                        <input type="email" placeholder='Email' name='email' required />
                        <textarea type="text" placeholder='Mensaje' name='message' required />
                        <button className='btn' type="submit" disabled={loading ? true : null}>
                            {loading && <i class="fas fa-spinner fa-spin"></i>}
                            {loading && 'Enviando'}
                            {!loading && 'Enviar'}
                        </button>
                        <Fade bottom>
                            {sent && <p className='success'><i class="far fa-check-square"></i>Tu mensaje ha sido enviado!</p>}
                        </Fade>
                    </form>
                </Fade>
            </div>
            <div className='social-media'>
                <a href='https://twitter.com/santidev7' target='_blank' rel='noopener noreferrer'><i class="fab fa-twitter-square"></i></a>
                <a href='https://github.com/SantiagoMartinMolina' target='_blank' rel='noopener noreferrer'><i class="fab fa-github-square"></i></a>
                <a href='https://www.linkedin.com/in/santiago-molina-dev/' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin"></i></a>
                {/* <p><a><i class="fas fa-envelope-open-text"></i></a>
                    <span>molina.santiago.martin@gmail.com</span></p> */}
                <p>Hecho por Santiago Martin Molina 2021 </p>
            </div>
        </StyledContactForm>
    )
}

export default ContactForm;