/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import './Hero.css';

function Hero({ componentRef, refs }) {
  return (
    <div className="hero" ref={componentRef}>
      <div className="hero-container">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Samodra</h1>
        <h2 className="hero-subname">Currently Student, UI/UX and Web Enthusiast</h2>
        <p className="hero-summary">College student majoring in Informatics Management. Love problem solving and Happy to help people to solve their problems. Currently, focus on developing skills in the field of Web Development and UI/UX.</p>
        <button type="button" onClick={() => { refs.current[5].scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary btn-outline">Get In Touch</button>
      </div>

      <aside className="hero-left">
        <ul className="hero-contact">
          <li>
            <a href="https://github.com/saamodra" aria-label="Samodra's Github" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/saamodra/" aria-label="Samodra's Linkedin" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/saamodra/" aria-label="Samodra's Instagram" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/saamodra/" aria-label="Samodra's Twitter" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </aside>

      <aside className="hero-right">
        <a href="mailto:samodra.me@gmail.com" target="_blank" rel="noreferrer">samodra.me@gmail.com</a>
      </aside>
    </div>
  );
}

export default Hero;
