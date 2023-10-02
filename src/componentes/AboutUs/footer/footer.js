import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './styleFooter.css';
import './responsive.css';


const Footer = () => {
    return(
        <div>
            <section className="menuItems">
                <ul>
                    <li><a href="#"> Find your recipe</a></li>
                    <li><a href="#">Ideas</a></li> 
                    <li><a href="#">Favorites</a></li>
                    <li> <a href="#">About Us</a></li>
                    <li> <a href="#">Sign Up</a></li>
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