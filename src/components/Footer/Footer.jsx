import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiHotelBedFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4 footer-top">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 footer-brand-col">
            <Link to="/" className="footer-logo d-flex align-items-center mb-3">
              <span className="logo-icon"><RiHotelBedFill /></span>
              <span className="logo-text text-white">Janani <span className="logo-accent">Hostels</span></span>
            </Link>
            <p className="footer-desc mb-4">
              Providing safe, secure, and highly comfortable accommodation for girls and women. Homely vegetarian food, 24/7 security, and all modern amenities near your colleges in Ongole.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/918886044788" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6 footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Facilities Column */}
          <div className="col-lg-3 col-md-6 footer-links-col">
            <h4 className="footer-title">Our Features</h4>
            <ul className="footer-links-list list-unstyled">
              <li><span className="feature-item">24/7 Security & CCTV</span></li>
              <li><span className="feature-item">Homely Vegetarian Food</span></li>
              <li><span className="feature-item">High-Speed Wi-Fi</span></li>
              <li><span className="feature-item">Washing Machines</span></li>
              <li><span className="feature-item">Power Generator Backup</span></li>
              <li><span className="feature-item">RO Drinking Water</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-6 footer-contact-col">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact-list list-unstyled">
              <li className="d-flex align-items-start gap-3">
                <span className="contact-icon text-accent-custom mt-1"><FaMapMarkerAlt /></span>
                <span className="contact-text">
                  Janani Ladies Hostel,<br />
                  Near Panchamukha Anjineyaswamy temple,<br />
                  Pandaripuram, Ongole, AP.
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="contact-icon text-accent-custom"><FaPhoneAlt /></span>
                <a href="tel:+918886044788" className="contact-text">+91 88860 44788</a>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="contact-icon text-accent-custom"><FaEnvelope /></span>
                <a href="mailto:jananiladieshostels@gmail.com" className="contact-text">jananiladieshostels@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="copyright-text mb-md-0">
            &copy; {currentYear} Janani Hostels. All Rights Reserved.
          </p>
          <p className="credit-text mb-0">
            Designed for Comfort & Safety
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
