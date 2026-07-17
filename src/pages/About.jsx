import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaEye, FaBullseye, FaShieldAlt, FaAward, FaUserCheck } from 'react-icons/fa';
import exteriorImg from '../assets/exterior.jpg';
import room3Img from '../assets/room-3sharing-1.jpg';
import './About.css';

const About = () => {
  // Fade in animation
  const fadin = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const timelineEvents = [
    { year: "2015", title: "The Foundation", desc: "Janani Hostels started with a small single branch of 20 beds, focused entirely on offering unmatched food quality." },
    { year: "2018", title: "Security Upgrade", desc: "Introduced advanced CCTV surveillance systems and biometric gate control to pioneer girl student safety in Ongole." },
    { year: "2021", title: "Capacity Expansion", desc: "Acquired a new multi-story building near Panchamukha Anjaneyaswamy Temple to accommodate over 150+ students." },
    { year: "2026", title: "Complete Modernization", desc: "Fitted rooms with separate lockers, set up fiber high-speed internet, and introduced automatic washing machines." }
  ];

  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <div className="about-header-banner" style={{ backgroundImage: `url(${exteriorImg})` }}>
        <div className="banner-overlay"></div>
        <div className="container banner-content text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            About Janani Hostels
          </motion.h1>
          <p className="text-white-50">Crafting a home away from home with premium security, nutritious food, and comfort.</p>
        </div>
      </div>

      {/* Hostel Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadin}
              >
                <span className="badge bg-primary-custom text-white mb-3 px-3 py-2 fw-bold">OUR STORY</span>
                <h2 className="mb-4 text-primary-custom">Nurturing Comfort & Trust For Over A Decade</h2>
                <p className="lead text-muted mb-4">
                  Janani Hostels was founded with a singular purpose: to solve the anxiety of parents looking for secure, clean, and healthy living quarters for their daughters pursuing higher studies.
                </p>
                <p className="text-muted mb-4">
                  Located in the peaceful locality of Pandaripuram, Ongole, we offer a cozy, student-friendly setting that supports academic focus and personal growth. Our management stays actively involved in day-to-day services—ranging from tasting food quality to conducting late-night attendance checks.
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="about-highlight d-flex align-items-center gap-2">
                    <span className="text-accent-custom"><FaAward /></span>
                    <span className="fw-bold">ISO Certified Safety</span>
                  </div>
                  <div className="about-highlight d-flex align-items-center gap-2">
                    <span className="text-accent-custom"><FaUserCheck /></span>
                    <span className="fw-bold">Experienced Wardens</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="about-image-wrapper position-relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={room3Img} alt="Cozy student bedroom" className="about-main-img shadow-lg rounded-4" />
                <div className="experience-badge bg-accent-custom text-dark p-4 rounded-4 shadowPosition">
                  <span className="exp-number d-block fw-extrabold">10+</span>
                  <span className="exp-text fw-bold text-uppercase">Years of Excellence</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <motion.div 
                className="mission-vision-card p-5 h-100 hover-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadin}
              >
                <div className="mv-icon bg-primary-light text-primary-custom mb-4 d-flex align-items-center justify-content-center">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
                <p className="text-muted mb-0">
                  To provide affordable, high-quality residential accommodations for female students and professionals. We dedicate ourselves to keeping students secure, well-nourished with home-style food, and comfortable so they can focus on their bright careers.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div 
                className="mission-vision-card p-5 h-100 hover-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadin}
                transition={{ delay: 0.1 }}
              >
                <div className="mv-icon bg-accent-light text-accent-custom mb-4 d-flex align-items-center justify-content-center">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p className="text-muted mb-0">
                  To become the gold standard of student hostels in Andhra Pradesh, known for our absolute security records, delicious nutrition plan, cleanliness, and responsive student support.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey Timeline</h2>
            <p>A look at how we grew from a modest hostel to a premium student residence.</p>
          </div>

          <div className="timeline-container position-relative">
            <div className="timeline-line d-none d-md-block"></div>
            <div className="row g-4">
              {timelineEvents.map((evt, idx) => (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <motion.div 
                    className="timeline-card p-4 text-center hover-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="timeline-year badge bg-accent-custom text-dark mb-3 px-3 py-2 fw-bold">{evt.year}</span>
                    <h4 className="timeline-title mb-2">{evt.title}</h4>
                    <p className="timeline-desc text-muted mb-0">{evt.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadin}
              >
                <img src={exteriorImg} alt="Hostel exterior security" className="w-100 rounded-4 shadow-md" />
              </motion.div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadin}
              >
                <h2 className="mb-4 text-primary-custom">Why Parents Have Peace of Mind</h2>
                <p className="text-muted mb-4">
                  We understand that safety is the biggest concern for parents sending their daughters away for college. At Janani Hostels, we enforce strict guidelines and systems to assure parents of absolute peace of mind:
                </p>
                <ul className="trust-reasons list-unstyled">
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <span className="trust-icon text-success"><FaShieldAlt /></span>
                    <div>
                      <strong className="d-block text-primary-custom">Gated Compound & Bio-Attendance</strong>
                      <span className="text-muted">High compound gates, late evening check-in limits, and biometrics log for exit/entry.</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <span className="trust-icon text-success"><FaShieldAlt /></span>
                    <div>
                      <strong className="d-block text-primary-custom">Hygienic and Nutrient Diet</strong>
                      <span className="text-muted">Freshly cooked vegetarian meals. Purified multi-stage RO water filter points.</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <span className="trust-icon text-success"><FaShieldAlt /></span>
                    <div>
                      <strong className="d-block text-primary-custom">Warden Support & Medical Care</strong>
                      <span className="text-muted">Attentive female wardens living on-site, ready to handle emergency medical services.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="owner-message-box glass-panel p-5 rounded-4 border shadow-sm">
            <div className="row g-4 align-items-center">
              <div className="col-md-2 text-center text-md-start">
                <div className="owner-avatar bg-primary-light text-primary-custom d-flex align-items-center justify-content-center">
                  <FaHeart />
                </div>
              </div>
              <div className="col-md-10 text-center text-md-start">
                <h3 className="owner-heading text-primary-custom mb-3">A Warm Welcome From The Management</h3>
                <blockquote className="owner-quote text-muted mb-4">
                  "At Janani Hostels, we do not view this as a business, but as a responsibility. We treat every student residing here as our own family. Our focus is to provide a clean, secure, and encouraging environment so that they can concentrate on building their careers. Welcome to the Janani family."
                </blockquote>
                <p className="owner-signature mb-0 fw-bold text-primary-custom">
                  — The Management Team, Janani Ladies Hostels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
