/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ refs, aboutRef }) {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const menuRef = useRef(myRef);

  const handleNavClick = () => setShowNav(!showNav);
  const closeNav = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  };

  const scrollToRef = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
  };

  window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY;
    const isScrolled = windowPosition > 50;

    setScrolled(isScrolled);
  });

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
          </ul>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
