import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSlidersH, FaTimes } from 'react-icons/fa';
import RoomCard from '../components/RoomCard/RoomCard';
import { roomData } from '../data/hostelData';
import exteriorImg from '../assets/exterior.jpg';
import './Rooms.css';

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSharing, setSelectedSharing] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [filteredRooms, setFilteredRooms] = useState(roomData);

  // Apply filters and searches
  useEffect(() => {
    let result = roomData;

    // Filter by sharing capacity
    if (selectedSharing !== 'all') {
      result = result.filter(room => room.sharing === parseInt(selectedSharing));
    }

    // Filter by price categories
    if (priceRange !== 'all') {
      result = result.filter(room => {
        const priceNum = parseInt(room.price.replace(/[^\d]/g, ''));
        if (priceRange === 'under-5k') return priceNum < 5000;
        if (priceRange === '5k-6k') return priceNum >= 5000 && priceNum <= 6000;
        if (priceRange === 'above-6k') return priceNum > 6000;
        return true;
      });
    }

    // Search term match in title or amenities
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(room => 
        room.type.toLowerCase().includes(term) || 
        room.amenities.some(amenity => amenity.toLowerCase().includes(term))
      );
    }

    setFilteredRooms(result);
  }, [searchTerm, selectedSharing, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSharing('all');
    setPriceRange('all');
  };

  return (
    <div className="rooms-page">
      {/* Page Header */}
      <div className="rooms-header-banner" style={{ backgroundImage: `url(${exteriorImg})` }}>
        <div className="banner-overlay"></div>
        <div className="container banner-content text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Sharing Rooms
          </motion.h1>
          <p className="text-white-50">Premium, spacious, well-ventilated rooms with custom amenities for students and working women.</p>
        </div>
      </div>

      {/* Main Listing Section */}
      <section className="section-padding rooms-listing-section">
        <div className="container">
          <div className="row g-4">
            
            {/* Filter Sidebar Column */}
            <div className="col-lg-3">
              <div className="filter-sidebar p-4 rounded-4 shadow-sm bg-white border">
                <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-2">
                  <h3 className="filter-sidebar-title d-flex align-items-center gap-2 mb-0 text-primary-custom">
                    <FaSlidersH /> Filters
                  </h3>
                  {(searchTerm || selectedSharing !== 'all' || priceRange !== 'all') && (
                    <button className="clear-filter-btn" onClick={clearFilters}>
                      Clear All
                    </button>
                  )}
                </div>

                {/* Search input */}
                <div className="filter-group mb-4">
                  <label className="form-label fw-bold mb-2">Search Rooms</label>
                  <div className="search-input-wrapper position-relative">
                    <input 
                      type="text" 
                      placeholder="e.g. WiFi, locker..." 
                      className="form-control py-2 ps-4" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="search-icon"><FaSearch /></span>
                  </div>
                </div>

                {/* Sharing filter */}
                <div className="filter-group mb-4">
                  <label className="form-label fw-bold mb-2">Sharing Configuration</label>
                  <div className="d-flex flex-column gap-2">
                    <label className="filter-radio-label">
                      <input 
                        type="radio" 
                        name="sharing" 
                        checked={selectedSharing === 'all'} 
                        onChange={() => setSelectedSharing('all')}
                      />
                      <span>All Sharing</span>
                    </label>
                    <label className="filter-radio-label">
                      <input 
                        type="radio" 
                        name="sharing" 
                        checked={selectedSharing === '3'} 
                        onChange={() => setSelectedSharing('3')}
                      />
                      <span>3-Sharing Room</span>
                    </label>
                    <label className="filter-radio-label">
                      <input 
                        type="radio" 
                        name="sharing" 
                        checked={selectedSharing === '4'} 
                        onChange={() => setSelectedSharing('4')}
                      />
                      <span>4-Sharing Room</span>
                    </label>
                    <label className="filter-radio-label">
                      <input 
                        type="radio" 
                        name="sharing" 
                        checked={selectedSharing === '5'} 
                        onChange={() => setSelectedSharing('5')}
                      />
                      <span>5-Sharing Room</span>
                    </label>
                  </div>
                </div>

                {/* Price range filter */}
                <div className="filter-group mb-4">
                  <label className="form-label fw-bold mb-2">Monthly Budget</label>
                  <select 
                    className="form-select py-2"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="all">All Prices</option>
                    <option value="under-5k">Under ₹5,000</option>
                    <option value="5k-6k">₹5,000 - ₹6,000</option>
                    <option value="above-6k">Above ₹6,000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Rooms Grid Column */}
            <div className="col-lg-9">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <span className="results-count fw-semibold text-muted">
                  Showing {filteredRooms.length} {filteredRooms.length === 1 ? 'Room' : 'Rooms'}
                </span>
              </div>

              {filteredRooms.length > 0 ? (
                <div className="row g-4">
                  {filteredRooms.map((room) => (
                    <div className="col-md-6 col-12" key={room.id}>
                      <RoomCard room={room} />
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results Empty State */
                <motion.div 
                  className="no-results-box p-5 text-center bg-white rounded-4 border shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="no-results-icon mb-3">☹</div>
                  <h4>No Rooms Match Your Search</h4>
                  <p className="text-muted mb-4">Try clearing filters or search for another term to view other configurations.</p>
                  <button className="btn-premium py-2 px-4" onClick={clearFilters}>
                    Reset Search Filters
                  </button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
