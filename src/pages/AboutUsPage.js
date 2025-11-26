import React from 'react';
import { FaUsers, FaBook, FaHandsHelping, FaGraduationCap, FaStar, FaGlobeAfrica } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineSchool } from 'react-icons/md';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to RWAMUSA</h1>
        <p>
          RwamparaMakerere University Students Association (RWAMUSA) is a vibrant community of students 
          dedicated to academic excellence, personal growth, and community development. We strive to create 
          a supportive environment that nurtures leadership, innovation, and social responsibility.
        </p>
      </section>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To empower families and individual youth through self-awareness, skilling, and advocacy, 
            creating a platform for holistic development and meaningful impact in our communities.
          </p>
        </div>
        
        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            Creating a strong, sustainable, morally sound society led by empowered young people who 
            are catalysts for positive change in their communities and beyond.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaUsers /></div>
            <h3>Unity</h3>
            <p>Strength through solidarity and shared purpose, fostering a sense of belonging among members.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon"><FaGraduationCap /></div>
            <h3>Education</h3>
            <p>Championing lifelong learning and intellectual growth as the foundation for personal and community development.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon"><FaGlobeAfrica /></div>
            <h3>Community</h3>
            <p>Building meaningful connections across generations while maintaining our cultural heritage.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon"><FaHandsHelping /></div>
            <h3>Service</h3>
            <p>Dedicated to contributing positively to society through meaningful initiatives and outreach programs.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon"><FaStar /></div>
            <h3>Excellence</h3>
            <p>Striving for the highest standards in all our endeavors, both academic and extracurricular.</p>
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="org-details">
        <h2>Organization Details</h2>
        
        <div className="detail-item">
          <h3><FaBook /> Name of the Organization</h3>
          <p>RwamparaMakerere University Students Association (RWAMUSA)</p>
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