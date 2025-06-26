import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/Logo.svg';
import Hamburger from '../assets/icons/Menu-icon.svg'; 
import Close from '../assets/icons/Closemenu-btn.svg'; 
import './styles/navbar.css'; 


function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <img src={Logo} alt="Logo" className="logo-icon" />
                <span className="logo-text">Start</span>
            </div>

            <div className="menu-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <img
                    src={isSidebarOpen ? Close : Hamburger}
                    alt="Menu"
                    className={`hamburger-icon ${isSidebarOpen ? 'close-icon' : ''}`}
                />
            </div>

            <div className="navbar-navs desktop-navs">
                <ul className="nav-item">
                    <li className='nav-links'><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
                    <li className='nav-links'><Link to="/Portfolio" onClick={() => setIsSidebarOpen(false)}>Portfolio</Link></li>
                    <li className='nav-links'><Link to="/Services" onClick={() => setIsSidebarOpen(false)}>Services</Link></li>
                    <li className='nav-links'><Link to="/Contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>

        {isSidebarOpen && (
            <div className="sidebar">
                <ul className="nav-item">
                    <li className='nav-links'><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
                    <li className='nav-links'><Link to="/Portfolio" onClick={() => setIsSidebarOpen(false)}>Portfolio</Link></li>
                    <li className='nav-links'><Link to="/Services" onClick={() => setIsSidebarOpen(false)}>Services</Link></li>
                    <li className='nav-links'><Link to="/Contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        )}
    </>
    );
}

export default Navbar;
