import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import exteriorImg from '../../assets/exterior.jpg';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${exteriorImg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content-wrapper">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="hero-title text-white mb-3">
                Your Safe & Comfortable <br />
                <span className="text-highlight">Home Away From Home</span>
              </h1>
            </motion.div>

            <motion.p
              className="hero-subtitle text-white-50 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Premium girls hostel in Ongole offering secure gated premises, CCTV, daily nutritious vegetarian food, high-speed Wi-Fi, and fully furnished rooms starting at highly affordable rates.
            </motion.p>

            <motion.div
              className="hero-cta d-flex flex-wrap gap-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="btn-premium py-3 px-4" 
                onClick={() => navigate('/rooms')}
              >
                Explore Rooms <FaArrowRight className="ms-2" />
              </button>
              <button 
                className="btn-premium-outline btn-hero-outline py-3 px-4"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
