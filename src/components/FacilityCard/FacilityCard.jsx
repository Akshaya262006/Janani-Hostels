import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUtensils, FaWifi, FaTshirt, FaBolt, FaBookReader } from 'react-icons/fa';

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

const iconMap = {
  FaShieldAlt: <FaShieldAlt />,
  FaUtensils: <FaUtensils />,
  FaWifi: <FaWifi />,
  FaTshirt: <FaTshirt />,
  FaBolt: <FaBolt />,
  FaBookReader: <FaBookReader />
};

import './FacilityCard.css';

const FacilityCard = ({ facility }) => {
  const facilityImage = imageMap[facility.image] || exterior;

  return (
    <motion.div 
      className="facility-card hover-card h-100 d-flex flex-column overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Image */}
      <div className="facility-img-wrapper position-relative">
        <img src={facilityImage} alt={facility.title} className="facility-img" />
        <div className="facility-img-overlay"></div>
        {/* Floating Icon */}
        <div className="facility-icon-floating d-flex align-items-center justify-content-center">
          {iconMap[facility.icon] || <FaShieldAlt />}
        </div>
      </div>

      {/* Card Content */}
      <div className="facility-card-body p-4 pt-5 text-center position-relative">
        <h3 className="facility-card-title mb-3">{facility.title}</h3>
        <p className="facility-card-desc mb-0">{facility.description}</p>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
export { iconMap };
