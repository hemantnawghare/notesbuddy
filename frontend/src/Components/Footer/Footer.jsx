import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section">
          <h2>Notes Buddy</h2>
          <p>Your ultimate companion for seamless note-taking and learning.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@notesbuddy.com">support@notesbuddy.com</a></p>
          <p>Phone: +1-234-567-8901</p>
          <p>Address: 123 Notes Buddy Street, App City</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Notes Buddy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
