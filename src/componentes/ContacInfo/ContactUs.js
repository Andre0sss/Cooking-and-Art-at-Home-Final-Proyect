import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './style.css';
import './responsive.css';

const ContactUs = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gik3mn4', 'template_6mslavi', form.current, 'YRA8uzbrtPDfP5AdF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
        setMostrarMensaje(true);
        
    };

    return(
    <div className="mainContainer">
        <div className="containerForm">
            <h1>Problems in the kitchen?</h1>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <input placeholder="Name" type="text" name="user_name" required></input>
                <input placeholder="Email" type="email" name="user_email" required></input>
                <textarea placeholder="Message" name="message"></textarea>
                <button type="submit" value="Send">Submit</button>
            </form>
            {mostrarMensaje && <p className='comentarioContacUs'>Comentario enviado con éxito, espere una respuesta pronto!</p>}
        </div>
        <div className="containerInfo">
                <h2>Contact Info</h2>
                <p><Icon.EnvelopeAtFill size="40" className="icon"/> cookingandartathome@gmail.com</p>
                <p><Icon.TelephoneFill size="40"  className="icon"/> +506 1234-5678</p>
            <section className="miniFooter">
            <section className="iconSectionC">
                    <a href="https://www.instagram.com/"><Icon.Instagram size="40" className="icon"/></a>
                    <a href="https://twitter.com/"><Icon.Twitter size="40" className="icon"/></a>
                    <a href="https://www.facebook.com/"><Icon.Facebook size="40" className="icon"/></a>
                    <a href="https://www.tiktok.com/"><Icon.Tiktok size="40" className="icon"/></a>
                    <a href="https://www.youtube.com/"><Icon.Youtube size="40" className="icon"/></a>
                    <a href="https://www.pinterest.es/"><Icon.Pinterest size="40" className="icon"/></a>
                </section>
                <p>© 2023. All rights reserved</p>
            </section>
        </div>
    </div>
    );
}

export default ContactUs;