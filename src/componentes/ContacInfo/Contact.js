import React from "react";
import './style.css';
import './responsive.css';

const ContactUs = () => {
    return(
    <div className="container">
        <div>
            <h1>Problems with the kitchen?</h1>
            <form>
                <input placeholder="Name" type="text"></input>
                <input placeholder="Email" type="email"></input>
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
            </form>
        </div>
        <div>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    </div>
    );
}

export default ContactUs;