import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'
import Fb from '../assets/icons/Fb.svg'
import Instagram from '../assets/icons/Insta.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Pinterest from '../assets/icons/Pinterest.svg'
import Tiktock from '../assets/icons/Tiktock.svg'
import Whatsapp from '../assets/icons/Whatsapp.svg'
import Youtube from '../assets/icons/Youtube.svg'


function Footer() {
    return (
    <div className="footer-section">
        <div className="footer-icons">
            <Link to="/Fb">
                <img src={Fb} alt="Facebook icon" className="footer-icon" />
            </Link>
            <Link to="/Insta">
                <img src={Instagram} alt="Instagram icon" className="footer-icon" />
            </Link>
            <Link to="/Twitter">
                <img src={Twitter} alt="Twitter icon" className="footer-icon" />
            </Link>
            <Link to="/Pinterest">
                <img src={Pinterest} alt="Pinterest icon" className="footer-icon" />
            </Link>
            <Link to="/Tiktock">
                <img src={Tiktock} alt="Tiktock icon" className="footer-icon" />
            </Link>
            <Link to="/Whatsapp">
                <img src={Whatsapp} alt="Whatsapp icon" className="footer-icon" />
            </Link>
            <Link to="/Youtube">
                <img src={Youtube} alt="Youtube icon" className="footer-icon" />
            </Link>
        </div>
        <div className="footer-copyright">
            <p className="footer-text">© Start, 2022. All rights reserved.</p>
        </div>
    </div>
    )
}

export default Footer
