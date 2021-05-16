import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNavClick = () => setShowNav(!showNav);
    const closeNav = (event) => setShowNav(false);

    window.addEventListener('scroll', (event) => {
        const windowPosition = window.scrollY;
        const isScrolled = windowPosition > 50;

        setScrolled(isScrolled);
    });

    return (
        <>
            <nav className={`navbar ${scrolled ? 'box-shadow' : ''}`}>
                <Link to="/" className="nav-link">
                    <img src="/wm-red-2.png" alt="" className="nav-logo" />
                </Link>

                <ul className="nav-items">
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#education">Education</Link></li>
                    <li><Link to="#certification">Certification</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact Me</Link></li>
                </ul>

                <div className="menu-icon">
                    <button type="button" onClick={handleNavClick}>
                        <i className={showNav ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </div>

                <aside aria-hidden={!showNav} tabIndex="-1" className={`aside-nav ${showNav ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="#about" onClick={closeNav}>About</Link></li>
                        <li><Link to="#education" onClick={closeNav}>Education</Link></li>
                        <li><Link to="#certification" onClick={closeNav}>Certification</Link></li>
                        <li><Link to="#projects" onClick={closeNav}>Projects</Link></li>
                        <li><Link to="#contact" onClick={closeNav}>Contact Me</Link></li>
                    </ul>
                </aside>
            </nav>
        </>
    );
}

export default Navbar;
