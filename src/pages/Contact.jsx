import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import exteriorImg from '../assets/exterior.jpg';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: 'Premium 3-Sharing Room',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill room type or form if coming from Book Now or specific RoomCard
  useEffect(() => {
    if (location.state) {
      if (location.state.selectedRoom) {
        setFormData(prev => ({ ...prev, roomType: location.state.selectedRoom }));
      }
      // Scroll to form smoothly
      const formEl = document.getElementById('contact-form-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        roomType: 'Premium 3-Sharing Room',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
      <div className="contact-header-banner" style={{ backgroundImage: `url(${exteriorImg})` }}>
        <div className="banner-overlay"></div>
        <div className="container banner-content text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact & Bookings
          </motion.h1>
          <p className="text-white-50">Get in touch with our team to reserve your spot or schedule a visit.</p>
        </div>
      </div>

      {/* Main Split Layout Section */}
      <section className="section-padding contact-main-section bg-light" id="contact-form-section">
        <div className="container">
          <div className="row g-5">
            
            {/* Left: Contact Info Column */}
            <div className="col-lg-5">
              <motion.div 
                className="contact-info-card p-5 h-100 rounded-4 shadow-sm text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-white mb-3">Hostel Office</h3>
                <p className="text-white-50 mb-5">
                  Have questions about pricing, hostel regulations, or food menu? Reach out directly or send us an email. We generally respond within a few hours.
                </p>

                <ul className="contact-detail-items list-unstyled mb-5">
                  <li className="d-flex align-items-start gap-3 mb-4">
                    <span className="info-icon-wrapper"><FaMapMarkerAlt /></span>
                    <div>
                      <strong className="d-block text-white">Address</strong>
                      <span className="text-white-50">
                        Janani Ladies Hostel,<br />
                        Near Panchamukha Anjineyaswamy temple,<br />
                        Pandaripuram, Ongole, Andhra Pradesh - 523002.
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-4">
                    <span className="info-icon-wrapper"><FaPhoneAlt /></span>
                    <div>
                      <strong className="d-block text-white">Phone</strong>
                      <a href="tel:+918886044788" className="text-white-50">+91 88860 44788</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-4">
                    <span className="info-icon-wrapper"><FaEnvelope /></span>
                    <div>
                      <strong className="d-block text-white">Email Address</strong>
                      <a href="mailto:jananiladieshostels@gmail.com" className="text-white-50">jananiladieshostels@gmail.com</a>
                    </div>
                  </li>
                </ul>

                <div className="whatsapp-box p-4 rounded-3 d-flex align-items-center justify-content-between gap-3 border border-light-subtle">
                  <div>
                    <h5 className="text-white mb-1">Instant WhatsApp Chat</h5>
                    <p className="text-white-50 small mb-0">Chat with the hostel warden/owner directly.</p>
                  </div>
                  <a href="https://wa.me/918886044788" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-chat">
                    <FaWhatsapp /> Chat
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form Column */}
            <div className="col-lg-7">
              <motion.div 
                className="contact-form-wrapper p-5 rounded-4 shadow-sm bg-white border"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-primary-custom mb-3">Online Booking Inquiry</h3>
                <p className="text-muted mb-4">Fill out this quick form and our manager will contact you with availability status.</p>

                {submitted ? (
                  /* Success Submit Message */
                  <motion.div 
                    className="alert alert-success text-center p-5 rounded-3"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  >
                    <span className="success-icon-large mb-3">✓</span>
                    <h4 className="alert-heading text-success">Inquiry Submitted Successfully!</h4>
                    <p className="mb-0">Thank you for your interest in Janani Hostels. Our manager will call you back shortly on your provided phone number.</p>
                  </motion.div>
                ) : (
                  /* Contact Form */
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6 col-12">
                        <label className="form-label">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          className="form-control py-2" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <label className="form-label">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required 
                          className="form-control py-2" 
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email Address (Optional)</label>
                        <input 
                          type="email" 
                          name="email"
                          className="form-control py-2" 
                          placeholder="yourname@gmail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Interested Room Type *</label>
                        <select 
                          className="form-select py-2" 
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                        >
                          <option value="Premium 3-Sharing Room">Premium 3-Sharing Room (₹4,500)</option>
                          <option value="Deluxe 4-Sharing Room (Type A)">Deluxe 4-Sharing Room (Type A - ₹4,500)</option>
                          <option value="Deluxe 4-Sharing Room (Type B)">Deluxe 4-Sharing Room (Type B - ₹4,500)</option>
                          <option value="Standard 4-Sharing Room (Type C)">Standard 4-Sharing Room (Type C - ₹4,500)</option>
                          <option value="Economy 5-Sharing Room">Economy 5-Sharing Room (₹4,500)</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Additional Message / Query (Optional)</label>
                        <textarea 
                          className="form-control" 
                          rows="4" 
                          name="message"
                          placeholder="Mention your college, expected joining date, or specific queries..."
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn-premium w-100 py-3">
                          <FaPaperPlane className="me-2" /> Send Inquiry Form
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Iframe Area */}
      <section className="map-section border-top">
        <div className="map-title-bar p-3 text-center bg-white border-bottom">
          <h4 className="mb-1 text-primary-custom d-flex align-items-center justify-content-center gap-2">
            <FaMapMarkerAlt /> Find Us On Google Maps
          </h4>
          <span className="text-muted small">Opp. Lakshmi Pulka Point, Pandaripuram, Ongole</span>
        </div>
        <div className="map-iframe-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757041793774!2d80.0401833!3d15.5034633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b011de3ff055f%3A0xea896d8e874cdb28!2sPandaripuram%2C%20Ongole%2C%20Andhra%20Pradesh%20523002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map showing Janani Hostels Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
