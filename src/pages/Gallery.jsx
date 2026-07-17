import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { galleryData } from '../data/hostelData';
import { imageMap } from '../components/RoomCard/RoomCard'; // Re-use image mapping
import exteriorImg from '../assets/exterior.jpg';
import './Gallery.css';

// Extend imageMap for gallery specifically if we need
import diningImg from '../assets/room-3sharing-1.jpg'; // fallback dining
import studyImg from '../assets/room-4sharing-1.jpg'; // fallback study

const localImageMap = {
  ...imageMap,
  'room-3sharing-1.jpg': diningImg, // dining path
  'room-4sharing-1.jpg': studyImg, // study path
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [filteredItems, setFilteredItems] = useState(galleryData);

  const categories = ['All', 'Rooms', 'Dining', 'Exterior', 'Study Area'];

  // Apply category filtering
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(galleryData.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase()));
    }
  }, [activeCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <div className="gallery-header-banner" style={{ backgroundImage: `url(${exteriorImg})` }}>
        <div className="banner-overlay"></div>
        <div className="container banner-content text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Photo Gallery
          </motion.h1>
          <p className="text-white-50">Visual tour of Janani Ladies Hostels. See your rooms and facilities before booking.</p>
        </div>
      </div>

      {/* Category Filters Bar */}
      <section className="section-padding bg-light pb-0">
        <div className="container">
          <div className="category-filters-container d-flex flex-wrap justify-content-center gap-3 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Photo Grid */}
          <motion.div 
            layout 
            className="row g-4 mb-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                const imgAsset = localImageMap[item.image] || exteriorImg;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="col-lg-3 col-md-6 col-12"
                    key={item.id}
                  >
                    <div 
                      className="gallery-card hover-card position-relative overflow-hidden rounded-3 shadow-sm"
                      onClick={() => openLightbox(idx)}
                    >
                      <div className="gallery-img-wrapper">
                        <img src={imgAsset} alt={item.title} className="gallery-img-tag" />
                      </div>
                      {/* Zoom glass icon overlay */}
                      <div className="gallery-card-overlay d-flex flex-column align-items-center justify-content-center">
                        <span className="zoom-icon-bubble"><FaSearchPlus /></span>
                        <h4 className="gallery-item-title text-white mt-3 mb-1">{item.title}</h4>
                        <span className="gallery-item-badge">{item.category}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Popout Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>

            {/* Left Nav Button */}
            <button className="lightbox-nav-btn prev" onClick={showPrev}>
              <FaChevronLeft />
            </button>

            {/* Lightbox Content Card */}
            <motion.div 
              className="lightbox-content-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={localImageMap[filteredItems[lightboxIndex].image] || exteriorImg} 
                alt={filteredItems[lightboxIndex].title} 
                className="lightbox-main-img" 
              />
              <div className="lightbox-caption-bar p-3 text-white">
                <span className="lightbox-category-badge">{filteredItems[lightboxIndex].category}</span>
                <h4 className="lightbox-caption-title mt-2 mb-0">{filteredItems[lightboxIndex].title}</h4>
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button className="lightbox-nav-btn next" onClick={showNext}>
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
export { localImageMap };
