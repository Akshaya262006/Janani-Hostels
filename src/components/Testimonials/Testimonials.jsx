import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonialData } from '../../data/hostelData';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to toggle layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Student & Parent Reviews</h2>
          <p>Read what our residents and their parents have to say about their experience living with us.</p>
        </div>

        {/* Carousel Container */}
        <div className="slider-wrapper position-relative">
          {isMobile ? (
            /* Mobile Layout: Single Card Slider */
            <div className="mobile-slider-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="testimonial-card p-4 mx-auto"
                >
                  <div className="quote-mark"><FaQuoteLeft /></div>
                  <div className="rating-stars mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(testimonialData[currentIndex].rating) ? "star-active" : "star-inactive"} 
                      />
                    ))}
                  </div>
                  <p className="review-text mb-4">"{testimonialData[currentIndex].review}"</p>
                  <div className="reviewer-info">
                    <h4 className="reviewer-name mb-0">{testimonialData[currentIndex].name}</h4>
                    <p className="reviewer-college mb-0">{testimonialData[currentIndex].college}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Desktop Layout: Show multiple testimonials or a grid slider */
            <div className="row justify-content-center">
              {testimonialData.map((item, idx) => {
                // Determine display class based on spacing
                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                    <motion.div 
                      className="testimonial-card p-4 h-100 d-flex flex-column justify-content-between"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                    >
                      <div>
                        <div className="quote-mark mb-3"><FaQuoteLeft /></div>
                        <div className="rating-stars mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < Math.floor(item.rating) ? "star-active" : "star-inactive"} 
                            />
                          ))}
                        </div>
                        <p className="review-text mb-4">"{item.review}"</p>
                      </div>
                      <div className="reviewer-info border-top pt-3">
                        <h4 className="reviewer-name mb-1">{item.name}</h4>
                        <p className="reviewer-college mb-0">{item.college}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Navigation Controls for Mobile Slider */}
          {isMobile && (
            <div className="slider-controls d-flex justify-content-center gap-3 mt-4">
              <button className="slider-control-btn" onClick={slidePrev} aria-label="Previous testimonial">
                <FaChevronLeft />
              </button>
              <div className="slider-dots d-flex align-items-center gap-2">
                {testimonialData.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="slider-control-btn" onClick={slideNext} aria-label="Next testimonial">
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
