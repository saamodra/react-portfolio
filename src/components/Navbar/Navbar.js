import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const handleNavClick = () => setShowNav(!showNav);
    const closeNav = () => setShowNav(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="nav-link">
                    <img src="/wm-tosca.png" alt="" className="nav-logo" />
                </Link>

                <ul className="nav-items">
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">Education</a></li>
                    <li><a href="#about">Certification</a></li>
                    <li><a href="#about">Projects</a></li>
                    <li><a href="#about">Contact Me</a></li>
                </ul>

                <div className="menu-icon">
                    <button type="button" onClick={handleNavClick}>
                        <i className={showNav ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </div>

                <aside aria-hidden={!showNav} tabIndex="-1" className={`aside-nav ${showNav ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Education</a></li>
                        <li><a href="#about">Certification</a></li>
                        <li><a href="#about">Projects</a></li>
                        <li><a href="#about">Contact Me</a></li>
                    </ul>
                </aside>
            </nav>
        </>
    );
}

export default Navbar;
