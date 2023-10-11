import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './styleFooter.css';
import './responsive.css';
import { Link, Outlet } from "react-router-dom";

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
                <Outlet/>
            </section>
            <section className="containerInfo">
                <section className="iconSectionF">
                    <a href="https://www.instagram.com/"><Icon.Instagram size="25" className="icon"/></a>
                    <a href="https://twitter.com/"><Icon.Twitter size="25" className="icon"/></a>
                    <a href="https://www.facebook.com/"><Icon.Facebook size="25" className="icon"/></a>
                    <a href="https://www.tiktok.com/"><Icon.Tiktok size="25" className="icon"/></a>
                    <a href="https://www.youtube.com/"><Icon.Youtube size="25" className="icon"/></a>
                    <a href="https://www.pinterest.es/"><Icon.Pinterest size="25" className="icon"/></a>
                </section>
                <p>© 2023.All rights reserved</p>
            </section>
        </div>
    )
}

export default Footer;