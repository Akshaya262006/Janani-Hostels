import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserFriends, FaRegCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import all room images
import room3sharing1 from '../../assets/room-3sharing-1.jpg';
import room4sharing1 from '../../assets/room-4sharing-1.jpg';
import room4sharing2 from '../../assets/room-4sharing-2.jpg';
import room4sharing3 from '../../assets/room-4sharing-3.jpg';

const imageMap = {
  'room-3sharing-1.jpg': room3sharing1,
  'room-4sharing-1.jpg': room4sharing1,
  'room-4sharing-2.jpg': room4sharing2,
  'room-4sharing-3.jpg': room4sharing3,
};

import './RoomCard.css';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/contact', { state: { selectedRoom: room.type } });
  };

  const roomImage = imageMap[room.image] || room4sharing1;

  return (
    <motion.div 
      className="room-card hover-card h-100 d-flex flex-column justify-content-between"
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="room-card-top position-relative overflow-hidden">
        {/* Availability Badge */}
        <span className={`availability-badge ${room.availability.toLowerCase().replace(' ', '-')}`}>
          {room.availability}
        </span>
        
        {/* Room Image */}
        <div className="room-img-container">
          <img src={roomImage} alt={room.type} className="room-card-img" />
        </div>
      </div>

      <div className="room-card-body p-4 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="room-badge">{room.gender} Only</span>
            <div className="capacity-badge d-flex align-items-center gap-1">
              <FaUserFriends /> <span>{room.capacity}</span>
            </div>
          </div>

          <h3 className="room-title-text mb-2">{room.type}</h3>
          
          <div className="price-container d-flex align-items-baseline mb-3">
            <span className="room-price-text">{room.price}</span>
            <span className="room-billing-text">/{room.billingCycle}</span>
          </div>

          {/* Amenities List */}
          <ul className="room-amenities-list list-unstyled mb-4">
            {room.amenities.map((amenity, idx) => (
              <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                <span className="amenity-check-icon"><FaRegCheckCircle /></span>
                <span className="amenity-text">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn-premium w-100 py-3 mt-auto" onClick={handleBook}>
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default RoomCard;
export { imageMap }; // Export imageMap for reuse in other components
