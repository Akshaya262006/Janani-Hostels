import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import './ContactCTA.css';

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="cta-card glass-panel-dark text-white p-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
          <div className="cta-content text-center text-lg-start">
            <span className="badge bg-accent-custom text-dark mb-3 px-3 py-2 fw-bold uppercase">Booking Open</span>
            <h3 className="cta-title text-white mb-2">Secure Your Comfort Place Today</h3>
            <p className="cta-text text-white-50 mb-0">
              Only a few rooms are left for the upcoming semester. Call us to book a visiting slot or reserve your room instantly.
            </p>
          </div>
          <div className="cta-actions d-flex flex-column flex-sm-row gap-3">
            <a href="tel:+918886044788" className="btn-premium-accent py-3 px-4 d-flex align-items-center justify-content-center">
              <FaPhoneAlt className="me-2" /> Call +91 88860 44788
            </a>
            <button onClick={() => navigate('/contact')} className="btn-premium-outline btn-cta-outline py-3 px-4 d-flex align-items-center justify-content-center">
              <FaCalendarCheck className="me-2" /> Book a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
