import React from 'react';
import './AboutUs.css'
import Footer from './footer/footer';
const AboutUs = () => {
    return (
        <div>
            <div className='main-container'>
                <div className='nav-bar'>
                    <nav>
                        <ul>
                            <li><a href='create-recipes'>Create Recipes</a></li>
                            <li><a href='ideas'>Ideas</a></li>
                            <li><a href='favorites'>Favorites</a></li>
                            <li><a href='about-us'>About Us</a></li>
                            <li><a href='sing-up'>Sing Up</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='content-box'>
                    <h2>Cooking and Art at Home</h2>
                    <p>Experience the magic of cooking at home with Cooking and Art at Home. Discover new techniques, ingredients and presentations that will transform your daily meals into culinary masterpieces.</p>
                    <button className='button'>Create Recipes</button>
                </div>
                <div className='bottom-page'>
                    <div className='image-container'>
                        <img src="https://as2.ftcdn.net/v2/jpg/06/33/52/89/1000_F_633528980_p0cSBGMSuzBp5ZJiHWPnU9K0KcgEhjyn.jpg" alt="mom and daugher cooking"/>
                    </div>
                    <div className='text-container'>
                        <h1>About Us</h1>
                        <p>CocinaArteEnCasa is a brand that fuses a passion for cooking with culinary art. Our mission is to inspire people to cook with creativity and style in their own space.
                        </p>
                    </div>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;