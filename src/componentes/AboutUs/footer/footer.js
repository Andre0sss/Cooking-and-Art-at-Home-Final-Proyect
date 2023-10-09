import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './styleFooter.css';
import './responsive.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div>
            <section className="menuItems">
                <ul>
                    <Link to={'/findRecepy'}>
                        <li>Find recipes</li>
                    </Link>
                    <Link to={'/contacUs'}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </section>
            <section className="containerInfo">
                <section className="iconSectionF">
                    <a href="#"><Icon.Twitter size="25" className="icon"/></a>
                    <a href="#"><Icon.Instagram size="25" className="icon"/></a>
                    <a href="#"><Icon.Facebook size="25" className="icon"/></a>
                    <a href="#"><Icon.Tiktok size="25" className="icon"/></a>
                    <a href="#"><Icon.Youtube size="25" className="icon"/></a>
                    <a href="#"><Icon.Pinterest size="25" className="icon"/></a>
                </section>
                <p>© 2023.All rights reserved</p>
            </section>
        </div>
    )
}

export default Footer;