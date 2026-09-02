import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="Footer Logo" />
                <p>Sami Live Fashion</p>
            </div>
            <ul className="footer-links">
                <li><Link to="/" onClick={scrollToTop}>Company</Link></li>
                <li><Link to="/mens">Product</Link></li>
                <li><Link to="/" onClick={scrollToTop}>About</Link></li>
                <li><Link to="/" onClick={scrollToTop}>Offices</Link></li>
                <li><Link to="/" onClick={scrollToTop}>Contact</Link></li>
            </ul>
            <div className="footer-socials-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="Instagram Icon" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="Pinterest Icon" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="WhatsApp Icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright © 2026 Sami Live Fashion. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer