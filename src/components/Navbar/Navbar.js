/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ refs }) {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleNavClick = () => setShowNav(!showNav);
  const closeNav = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  };

  const scrollToRef = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY;
    const isScrolled = windowPosition > 50;

    setScrolled(isScrolled);
  });

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'box-shadow' : ''}`}>
        <button type="button" onClick={() => scrollToRef(refs.current[0])} className="nav-link">
          <img src="/wm-red-2.png" alt="" className="nav-logo" />
        </button>

        <ul className="nav-items">
          <li><button type="button" onClick={() => scrollToRef(refs.current[1])}>About</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[2])}>Education</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[3])}>Experience</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[4])}>Projects</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[5])}>Contact Me</button></li>
          <li>
            <label className="switch" htmlFor="switch">
              <input type="checkbox" id="switch" onClick={changeMode} />
              <span className="slider round" />
            </label>
          </li>
        </ul>

        <div className="menu-icon">
          <button type="button" onClick={handleNavClick}>
            <i className={showNav ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>

        <aside aria-hidden={!showNav} tabIndex="-1" className={`aside-nav ${showNav ? 'active' : ''}`}>
          <ul>
            <li><button type="button" onClick={() => closeNav(refs.current[0])}>Home</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[1])}>About</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[2])}>Education</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[3])}>Experience</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[4])}>Projects</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[5])}>Contact Me</button></li>
            <li>
              <label className="switch" htmlFor="switch">
                <input type="checkbox" id="switch" onClick={changeMode} />
                <span className="slider round" />
              </label>
            </li>
          </ul>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
