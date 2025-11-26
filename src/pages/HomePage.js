import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container home-page">
      <div className="home-hero">
        <div className="logo-section">
          <img src="/assets/images/Rwamusa _logo.jpeg" alt="RWAMUSA Logo" className="hero-logo" />
          <h1 className="organization-name">RwamparaMakerere University Students Association</h1>
        </div>
        <p className="mission-statement">
          Empowering families and individual youth through self-awareness, skilling and advocacy.
        </p>
        <p className="motto">"OUR UNITY IS OUR STRENGTH"</p>
      </div>
      
      <div className="home-section">
        <h2>Who We Are</h2>
        <div className="card">
          <p>
            The RwamparaMakerere University Students Association (RWAMUSA) is dedicated to fostering a strong community 
            between alumni and current students, promoting unity, growth, and the continuation of our shared values and traditions.
          </p>
          <p>
            Our head offices are located at Makerere University, Kampala, Uganda. We are expanding nationwide with chapters 
            from different universities across the country.
          </p>
        </div>
      </div>
      
      <div className="home-section">
        <h2>Our Vision</h2>
        <div className="card">
          <p>
            Creating a strong, sustainable, morally sounding society majored by the young people.
          </p>
        </div>
      </div>
      
      <div className="home-section">
        <h2>Our Mission</h2>
        <div className="card">
          <p>
            To empower families and individual youth through self-awareness, skilling and advocacy.
          </p>
        </div>
      </div>
      
      <div className="home-section">
        <h2>Upcoming Events</h2>
        <div className="card">
          <ul>
            <li>Alumni Mentorship Meetup - March 15, 2024</li>
            <li>Seminar Series: Career Development - April 5, 2024</li>
            <li>Annual Reunion - June 20, 2024</li>
          </ul>
          <button className="rwamusa-button secondary">View All Events</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;