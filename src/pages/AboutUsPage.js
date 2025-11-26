import React from 'react';
import { FaBook } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineSchool } from 'react-icons/md';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          The RwamparaMakerere University Students Association (RWAMUSA) is dedicated to fostering a strong community 
          between alumni and current students, promoting unity, growth, and the continuation of our shared values and traditions. 
          Our head offices are located at Makerere University, Kampala, Uganda. We are expanding nationwide with chapters 
          from different universities across the country.
        </p>
      </section>

      {/* Organization Details */}
      <section className="org-details">
        <h2>Organization Details</h2>
        
        <div className="detail-item">
          <h3><FaBook /> Name of the Organization</h3>
          <p>Rwampara Makerere University Students Association (RWAMUSA)</p>
        </div>
        
        <div className="detail-item">
          <h3><IoLocationSharp /> Location</h3>
          <p>Makerere University, Kampala, Uganda</p>
        </div>
        
        <div className="detail-item">
          <h3><MdOutlineSchool /> Areas of Operation</h3>
          <p>
            RWAMUSA operates nationwide with chapters in universities across Uganda. 
            Currently based at Makerere University, we are expanding to other institutions 
            to create a broader network of empowered students and alumni.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;