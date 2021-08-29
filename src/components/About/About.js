/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import './About.css';

function About({ componentRef }) {
  return (
    <section className="section-about" id="about" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">02. </span>
          About
        </h2>
      </div>

      <div className="section-about-content">
        <div className="section-image">
          <picture>
            <source media="(min-width:1024px)" type="image/webp" srcSet="images/profile-large.webp" />
            <source media="(min-width:1024px)" type="image/jpeg" srcSet="images/profile-large.jpg" />
            <source type="image/webp" srcSet="images/profile-small.webp" />
            <img src="images/profile-small.jpg" alt="Profile" loading="lazy" />
          </picture>
        </div>
        <div className="section-description">
          <p>
            Hello! My name is
            {' '}
            <span className="text-name">Samodra</span>
            . I enjoy learning new things about programming and web technology. Now, I am interested in front end development, especially
            {' '}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React.js</a>
            ,
            {' '}
            <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noreferrer">PWA</a>
            ,
            {' '}
            and Web App Optimization.
          </p>
          <p>
            My main focus these days is to finish the rest of my college and building a good personal portfolio. I am also active in the Indonesian programming community to continue to learn a new things and develop my communication skill with other programmers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
