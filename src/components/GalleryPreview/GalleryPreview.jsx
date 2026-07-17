import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEye, FaArrowRight } from 'react-icons/fa';
import { galleryData } from '../../data/hostelData';

import room3sharing1 from '../../assets/room-3sharing-1.jpg';
import room4sharing1 from '../../assets/room-4sharing-1.jpg';
import room4sharing2 from '../../assets/room-4sharing-2.jpg';
import room4sharing3 from '../../assets/room-4sharing-3.jpg';
import exterior from '../../assets/exterior.jpg';

const imageMap = {
  'room-3sharing-1.jpg': room3sharing1,
  'room-4sharing-1.jpg': room4sharing1,
  'room-4sharing-2.jpg': room4sharing2,
  'room-4sharing-3.jpg': room4sharing3,
  'exterior.jpg': exterior
};

import './GalleryPreview.css';

const GalleryPreview = () => {
  const navigate = useNavigate();
  // Select first 4 items for the preview
  const previewItems = galleryData.slice(0, 4);

  return (
    <section className="gallery-preview-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Gallery Tour</h2>
          <p>Get a glimpse of our spacious rooms, clean corridors, exterior layout, and welcoming atmosphere.</p>
        </div>

        <div className="row g-4 mb-5">
          {previewItems.map((item, index) => {
            const imgAsset = imageMap[item.image] || exterior;
            return (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <motion.div
                  className="gallery-preview-card position-relative overflow-hidden rounded-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="img-zoom-wrapper">
                    <img src={imgAsset} alt={item.title} className="preview-img w-100" />
                  </div>
                  {/* Hover Overlay */}
                  <div className="preview-overlay d-flex flex-column align-items-center justify-content-center">
                    <span className="preview-overlay-icon mb-2"><FaEye /></span>
                    <span className="preview-overlay-title">{item.title}</span>
                    <span className="preview-overlay-category">{item.category}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <button 
            className="btn-premium py-3 px-4" 
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
