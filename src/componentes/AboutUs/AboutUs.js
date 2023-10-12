import React from 'react';
import './AboutUs.css'
import Footer from './footer/footer';
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <div className='main-container'>
                
                <div className='content-box'>
                    <h1>Cooking and Art at Home</h1>
                    <p>Experience the magic of cooking at home with Cooking and Art at Home. Discover new techniques, ingredients and presentations that will transform your daily meals into culinary masterpieces.</p>
                    <Link to={'/findRecepy'}><button className='button'>Find recipes</button></Link>
                    <Outlet/>
                </div>
                <div className='bottom-page'>
                    <div className='image-container'>
                        <img src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='mom & daugther'/>
                    </div>
                    <div className='text-container'>
                        <h1>About Us</h1>
                        <p>Cooking and Art at Home is a brand that fuses a passion for cooking with culinary art. Our mission is to inspire people to cook with creativity and style in their own space.
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