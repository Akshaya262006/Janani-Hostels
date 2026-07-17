import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { RiHotelBedFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleBookNow = () => {
    navigate('/contact', { state: { bookingInterest: true } });
  };

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled shadow-md' : 'transparent'} ${mobileMenuOpen ? 'menu-active' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link to="/" className="navbar-logo d-flex align-items-center">
            <span className="logo-icon"><RiHotelBedFill /></span>
            <span className="logo-text">Janani <span className="logo-accent">Hostels</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop d-none d-lg-flex align-items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-item-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-premium ms-3" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button 
            className="navbar-toggle-btn d-lg-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay d-lg-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="mobile-nav-drawer glass-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drawer-header d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
                  <span className="logo-text">Janani <span className="logo-accent">Hostels</span></span>
                </Link>
                <button className="drawer-close" onClick={() => setMobileMenuOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              <div className="drawer-body">
                <div className="drawer-links d-flex flex-column">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        className={`drawer-link-item ${location.pathname === link.path ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="drawer-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className="btn-premium-accent w-100 py-3" onClick={handleBookNow}>
                    Book Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
