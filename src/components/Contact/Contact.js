/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
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
          <i className="fa fa-envelope" />
          {' '}
          Ping!
        </a>
        <ul className="contact-links">
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
          <li>
            <a href="mailto:samodra.me@gmail.com">
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
