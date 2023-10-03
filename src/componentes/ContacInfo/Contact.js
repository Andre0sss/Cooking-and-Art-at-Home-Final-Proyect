import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './style.css';
import './responsive.css';

const ContactUs = () => {
    return(
    <div className="mainContainer">
        <div className="containerForm">
            <h1>Problems with the kitchen?</h1>
            <form className="contactForm">
                <input placeholder="Name" type="text"></input>
                <input placeholder="Email" type="email"></input>
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
            </form>
        </div>
        <div className="containerInfo">
            <Icon.HouseFill size="25"/>
            <h2>Contact Info</h2>
            <p><Icon.EnvelopeAtFill size="25"/> empresa@gmail.com</p>
            <p><Icon.TelephoneFill size="25"/> +506 1234-5678</p>
            <section>
            <section className="iconSectionC">
                    <a href="#"><Icon.Twitter size="25" className="icon"/></a>
                    <a href="#"><Icon.Instagram size="25" className="icon"/></a>
                    <a href="#"><Icon.Facebook size="25" className="icon"/></a>
                    <a href="#"><Icon.Tiktok size="25" className="icon"/></a>
                    <a href="#"><Icon.Youtube size="25" className="icon"/></a>
                    <a href="#"><Icon.Pinterest size="25" className="icon"/></a>
                </section>
            </section>
            <p>© 2023. All rights reserved</p>
        </div>
    </div>
    );
}

export default ContactUs;