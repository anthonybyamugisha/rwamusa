import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/assets/images/Rwamusa _logo.jpeg" alt="RWAMUSA Logo" className="footer-logo-image" />
            <h3 className="logo-text">RWAMUSA</h3>
            <p className="motto">OUR UNITY IS OUR STRENGTH</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>About RWAMUSA</h4>
          <ul className="footer-links">
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul className="footer-links">
            <li><NavLink to="/alumni-network">Alumni</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul className="contact-info">
            <li>Email: rwamusa7@gmail.com</li>
            <li>Phone: +256 787638563</li>
            <li>Address: Makerere University Kampala</li>
          </ul>
          
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RWAMUSA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;