import React from 'react';
import { FaUsers, FaGraduationCap, FaHandsHelping, FaStar, FaChartLine, FaPeopleCarry, FaFistRaised, FaUser } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container home-page">
      {/* Enhanced Hero Section - Welcome to RWAMUSA */}
      <section className="hero-section">
        <div className="hero-logo-background"></div>
        <div className="hero-content">
          <h1 className="organization-name">RWAMPARA MAKERERE UNIVERSITY STUDENTS ASSOCIATION</h1>
          <p className="mission-statement">
            "Contributing to the integral development of our fellow comrades through popular and durable constitution based on the principles of unity, equality and transparency"
          </p>
          <p className="motto">"UNITY IS OUR STRENGTH"</p>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <div className="mission-vision">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To empower families and individual youth through self-awareness, skilling, and advocacy.
          </p>
        </div>
        
        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            Creating a strong, sustainable, morally sounding society majored by the young people.
          </p>
        </div>
      </div>

      {/* Core Values Section with Hexagonal Cards */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-accent"></div>
            <FaStar className="value-icon" />
            <h3>High Expectations</h3>
            <p className="value-description">Setting ambitious goals and striving for excellence in all our endeavors.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaChartLine className="value-icon" />
            <h3>Excellence</h3>
            <p className="value-description">Striving for the highest standards in all our endeavors, both academic and extracurricular.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaHandsHelping className="value-icon" />
            <h3>Dedicated</h3>
            <p className="value-description">Committed to serving our community with passion and unwavering dedication.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaUsers className="value-icon" />
            <h3>Success</h3>
            <p className="value-description">Working together to achieve collective success for all members of our association.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaPeopleCarry className="value-icon" />
            <h3>Collaborative</h3>
            <p className="value-description">Building partnerships and working together to strengthen our community bonds.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaFistRaised className="value-icon" />
            <h3>Integrity</h3>
            <p className="value-description">Upholding the highest ethical standards in all our actions and decisions.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaGraduationCap className="value-icon" />
            <h3>Responsibility</h3>
            <p className="value-description">Taking ownership of our actions and commitments to our community.</p>
          </div>
          
          <div className="value-card">
            <div className="value-accent"></div>
            <FaUser className="value-icon" />
            <h3>Self Brief</h3>
            <p className="value-description">Understanding ourselves and communicating our identity and values clearly.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {/* Event 1 */}
          <div className="event-card">
            <div className="event-image-placeholder">
              <div className="placeholder-text">Event Image</div>
            </div>
            <div className="event-date">June 15, 2024</div>
            <h3>Annual Alumni Meet</h3>
            <p className="event-description">
              Join us for our annual gathering of RWAMUSA alumni from all chapters.
            </p>
          </div>

          {/* Event 2 */}
          <div className="event-card">
            <div className="event-image-placeholder">
              <div className="placeholder-text">Event Image</div>
            </div>
            <div className="event-date">July 22, 2024</div>
            <h3>Community Service Day</h3>
            <p className="event-description">
              Participate in our quarterly community service initiative.
            </p>
          </div>

          {/* Event 3 */}
          <div className="event-card">
            <div className="event-image-placeholder">
              <div className="placeholder-text">Event Image</div>
            </div>
            <div className="event-date">August 5, 2024</div>
            <h3>Career Development Workshop</h3>
            <p className="event-description">
              Enhance your professional skills with our expert-led workshops.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;