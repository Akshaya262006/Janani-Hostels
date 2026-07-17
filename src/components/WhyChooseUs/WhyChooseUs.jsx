import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaAppleAlt, FaWifi, FaTshirt, FaLightbulb, FaCamera, FaTint, FaBook } from 'react-icons/fa';
import { whyChooseUsData } from '../../data/hostelData';
import './WhyChooseUs.css';

// Map icon string to React Icon component
const iconMap = {
  FaLock: <FaLock />,
  FaAppleAlt: <FaAppleAlt />,
  FaWifi: <FaWifi />,
  FaTshirt: <FaTshirt />,
  FaLightbulb: <FaLightbulb />,
  FaCamera: <FaCamera />,
  FaTint: <FaTint />,
  FaBook: <FaBook />
};

const WhyChooseUs = () => {
  // Framer Motion configuration for container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="section-padding why-choose-us-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Janani Hostels?</h2>
          <p>We combine comfort, convenience, and safety to offer a premium living experience tailored for student success.</p>
        </div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {whyChooseUsData.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <motion.div 
                className="feature-card hover-card text-center p-4 h-100 d-flex flex-column align-items-center"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="icon-wrapper mb-3 d-flex align-items-center justify-content-center">
                  {iconMap[item.icon] || <FaLock />}
                </div>
                <h3 className="feature-title mb-2">{item.title}</h3>
                <p className="feature-desc mb-0">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
