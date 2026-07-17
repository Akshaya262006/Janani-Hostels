import React from 'react';
import Hero from '../components/Hero/Hero';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import RoomCard from '../components/RoomCard/RoomCard';
import FacilityCard from '../components/FacilityCard/FacilityCard';
import Statistics from '../components/Statistics/Statistics';
import GalleryPreview from '../components/GalleryPreview/GalleryPreview';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import ContactCTA from '../components/ContactCTA/ContactCTA';
import { roomData, facilitiesData } from '../data/hostelData';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // Get 3 popular rooms for preview
  const popularRooms = roomData.slice(0, 3);
  // Get 3 facilities for quick preview on Home
  const popularFacilities = facilitiesData.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <Hero />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Popular Rooms Section */}
      <section className="section-padding bg-white border-top border-bottom">
        <div className="container">
          <div className="section-header">
            <h2>Popular Accommodation</h2>
            <p>Explore our most popular, fully furnished sharing configurations designed to fit different budgets and needs.</p>
          </div>

          <div className="row g-4">
            {popularRooms.map((room) => (
              <div className="col-lg-4 col-md-6" key={room.id}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button 
              className="btn-premium-outline py-3 px-4" 
              onClick={() => navigate('/rooms')}
            >
              View All Sharing Options <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Premium Amenities</h2>
            <p>We provide a wide range of services to ensure your stay is comfortable, secure, and hassle-free.</p>
          </div>

          <div className="row g-4">
            {popularFacilities.map((facility) => (
              <div className="col-lg-4 col-md-6" key={facility.id}>
                <FacilityCard facility={facility} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button 
              className="btn-premium py-3 px-4" 
              onClick={() => navigate('/facilities')}
            >
              See All Facilities <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Student Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQ />

      {/* Book a visit CTA */}
      <ContactCTA />
    </div>
  );
};

export default Home;
