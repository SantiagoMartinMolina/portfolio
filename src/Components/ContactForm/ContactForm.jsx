import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { StyledContactForm } from './StyledContactForm';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_9qico7k', 'template_jit8309', e.target, 'user_L6pDIzPRsaEAd0WOYmj8C')
            .then((result) => {
                alert('enviado')
                setLoading(false);
            }, (error) => {
                console.log('asdasd', error);
            });
    }
    return (
        <StyledContactForm>
            <div className='container'>
                <h1>
                    Contacto
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Nombre' name='from_name' required />
                    <input type="email" placeholder='Email' name='email' required />
                    <textarea type="text" placeholder='Mensaje' name='message' required />
                    <button className='btn' type="submit" disabled={loading ? true : null}>Enviar</button>
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