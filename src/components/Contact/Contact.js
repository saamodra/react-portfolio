/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import './Contacts.css';

function Contact({ componentRef }) {
  return (
    <section className="section-contact" ref={componentRef}>
      <div className="section-contact-title">
        <p className="section-contact-subtitle">Get in touch</p>
        <h2>Let&apos;s talk</h2>
      </div>

      <div className="section-content">
        <p className="contact-description">If you want to collaborate or just want to say &apos;hi&apos;, feel free to contact me.</p>
        <a className="btn btn-primary btn-outline mx-auto" href="mailto:samodra.me@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          Ping!
        </a>
        <ul className="contact-links">
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
            <a href="https://instagram.com/samodra.me/" aria-label="Samodra's Instagram" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/saamodra/" aria-label="Samodra's Twitter" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="mailto:samodra.me@gmail.com" aria-label="Samodra's Email" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
