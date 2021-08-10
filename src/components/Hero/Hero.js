import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Samodra</h1>
        <h2 className="hero-subname">Currently Student, UI/UX and Web Enthusiast</h2>
        <p className="hero-summary">Vocational high school graduate with a background in web design and development. Currently, I am studying for a Associate&apos;s degree in Informatics Management at Astra Polytechnic.</p>
        <Link to="/contact-me" className="btn btn-primary btn-outline">Get In Touch</Link>
      </div>

      <aside className="hero-left">
        <ul className="hero-contact">
          <li>
            <a href="https://github.com/saamodra" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/saamodra/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/saamodra/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/saamodra/">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </aside>

      <aside className="hero-right">
        <a href="mailto:szsamodra@gmail.com">szsamodra@gmail.com</a>
      </aside>
    </div>
  );
}

export default Hero;
