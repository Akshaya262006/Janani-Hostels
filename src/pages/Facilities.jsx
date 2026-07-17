import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import FacilityCard from '../components/FacilityCard/FacilityCard';
import { facilitiesData } from '../data/hostelData';
import exteriorImg from '../assets/exterior.jpg';
import './Facilities.css';

const Facilities = () => {
  return (
    <div className="facilities-page">
      {/* Page Header Banner */}
      <div className="facilities-header-banner" style={{ backgroundImage: `url(${exteriorImg})` }}>
        <div className="banner-overlay"></div>
        <div className="container banner-content text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hostel Facilities
          </motion.h1>
          <p className="text-white-50">Fully loaded with all essential amenities and digital systems for a comfortable student life.</p>
        </div>
      </div>

      {/* Main Facilities Section */}
      <section className="section-padding facilities-grid-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Complete List of Facilities</h2>
            <p>We leave no stone unturned when it comes to supporting our students. Experience comfort and safety combined.</p>
          </div>

          <div className="row g-4">
            {facilitiesData.map((facility, idx) => (
              <div className="col-lg-4 col-md-6 col-12" key={facility.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <FacilityCard facility={facility} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Spotlight Section */}
      <section className="section-padding bg-white border-top">
        <div className="container">
          <div className="section-header">
            <h2>Services Spotlight</h2>
            <p>Deep dive into some of our high-quality installations designed for longevity and safety.</p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Spot 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="spotlight-card p-4 rounded-4 border h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="text-primary-custom mb-3">Multi-Stage RO Drinking Water</h4>
                  <p className="text-muted small">
                    Drinking water is purified using a multi-stage Reverse Osmosis (RO) filter, removing solutes, dissolved solids, and microbes. Regular filter checks and storage tank cleaning are conducted weekly.
                  </p>
                </div>
                <div className="spotlight-badge bg-primary-light text-primary-custom px-3 py-1 rounded fw-bold small align-self-start mt-3">
                  TDS Level: 80 - 120
                </div>
              </div>
            </div>

            {/* Spot 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="spotlight-card p-4 rounded-4 border h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="text-primary-custom mb-3">Homely Cooked Menu Board</h4>
                  <p className="text-muted small">
                    Every dish is prepared using fresh ingredients with minimal oil and spice. We change our menu weekly to avoid monotony, serving idli, dosa, puri for breakfasts, standard rice with sambar, curry, curd for lunches, and specialized South Indian items for dinner.
                  </p>
                </div>
                <div className="spotlight-badge bg-accent-light text-accent-hover px-3 py-1 rounded fw-bold small align-self-start mt-3">
                  4 Meals Daily
                </div>
              </div>
            </div>

            {/* Spot 3 */}
            <div className="col-lg-4 col-md-12">
              <div className="spotlight-card p-4 rounded-4 border h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="text-primary-custom mb-3">Seamless Digital Surveillance</h4>
                  <p className="text-muted small">
                    Safety is integrated digitally. We maintain high-definition dome cameras with night-vision mapping in every hallway, exit gate, kitchen area, and stairs. The footage is recorded on secure DVR servers with 30-day continuous backup.
                  </p>
                </div>
                <div className="spotlight-badge bg-success-light text-success px-3 py-1 rounded fw-bold small align-self-start mt-3">
                  24/7 DVR Rec
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
