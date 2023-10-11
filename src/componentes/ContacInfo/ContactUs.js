import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as Icon from 'react-bootstrap-icons';
import './style.css';
import './responsive.css';

const ContactUs = () => {

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
        </div>
        <div className="containerInfo">
                <h2>Contact Info</h2>
                <p><Icon.EnvelopeAtFill size="40" className="icon"/> empresa@gmail.com</p>
                <p><Icon.TelephoneFill size="40"  className="icon"/> +506 1234-5678</p>
            <section className="miniFooter">
                <section className="iconSectionC">
                        <a href="#"><Icon.Twitter size="40" className="icon"/></a>
                        <a href="#"><Icon.Instagram size="40" className="icon"/></a>
                        <a href="#"><Icon.Facebook size="40" className="icon"/></a>
                        <a href="#"><Icon.Tiktok size="40" className="icon"/></a>
                        <a href="#"><Icon.Youtube size="40" className="icon"/></a>
                        <a href="#"><Icon.Pinterest size="40" className="icon"/></a>
                </section>
                <p>© 2023. All rights reserved</p>
            </section>
        </div>
    </div>
    );
}

export default ContactUs;