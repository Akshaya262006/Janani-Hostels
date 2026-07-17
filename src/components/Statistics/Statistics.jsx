import React from 'react';
import { motion } from 'framer-motion';
import { statisticsData } from '../../data/hostelData';
import './Statistics.css';

const Statistics = () => {
  return (
    <section className="statistics-section section-padding">
      <div className="statistics-bg-overlay"></div>
      <div className="container position-relative z-index-2">
        <div className="row g-4 text-center">
          {statisticsData.map((stat, index) => (
            <div className="col-md-3 col-6" key={stat.id}>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="stat-number mb-2">{stat.number}</h3>
                <p className="stat-label mb-0">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
