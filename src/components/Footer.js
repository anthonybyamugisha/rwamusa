import React from 'react';
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
            <li><a href="/about">About Us</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/projects">Projects & Impact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul className="footer-links">
            <li><a href="/student-corner">Student Corner</a></li>
            <li><a href="/alumni-network">Alumni Network</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/donate">Donate/Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul className="contact-info">
            <li>Email: info@rwamusa.org</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 University Ave, City, Country</li>
          </ul>
          
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="https://twitter.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Twitter">TW</a>
              <a href="https://instagram.com/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://linkedin.com/company/rwamusa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RWAMUSA. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;