import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <p className="hero-greeting">Hi, my name is</p>
                <h1 className="hero-name">Samodra</h1>
                <h2 className="hero-subname">Currently Student</h2>
                <p className="hero-summary">Vocational high school graduate with a background in web design and development. Currently, I am studying for a Associate's degree in Informatics Management at Astra Manufacturing Polytechnic.</p>
                <Link to="/contact-me" className="btn btn-primary btn-outline">Get In Touch</Link>
            </div>
        </div>
    );
}

export default Hero;
