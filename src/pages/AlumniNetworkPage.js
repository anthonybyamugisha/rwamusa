import React, { useEffect } from 'react';
import './AlumniNetworkPage.css';

const AlumniNetworkPage = () => {
  useEffect(() => {
    // Add staggered animation to alumni profile cards
    const alumniCards = document.querySelectorAll('.alumni-profile-card');
    alumniCards.forEach((card, index) => {
      // Add animation class
      card.classList.add('animate-fade-in-up');
      // Add staggered delay
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add animation to connect section
    const connectCard = document.querySelector('.card');
    if (connectCard) {
      connectCard.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <div className="page-container alumni-network-page">
      <h1 className="page-title animate-fade-in-down">Alumni Network</h1>
      
      <div className="alumni-section">
        <h2 className="animate-fade-in-down">Notable Alumni</h2>
        
        <div className="alumni-profile-card">
          <div className="alumni-profile">
            <div className="alumni-image">Profile Image</div>
            <div className="alumni-info">
              <h3>Dr. Elizabeth Katushabe</h3>
              <p><strong>Class of 1985 | Medicine</strong></p>
              <p className="alumni-bio">
                Renowned cardiologist and researcher who has pioneered innovative treatments for heart disease 
                in developing countries. Recipient of the National Medical Excellence Award.
              </p>
            </div>
          </div>
        </div>
        
        <div className="alumni-profile-card">
          <div className="alumni-profile">
            <div className="alumni-image">Profile Image</div>
            <div className="alumni-info">
              <h3>Mr. Robert Mugisha</h3>
              <p><strong>Class of 1992 | Engineering</strong></p>
              <p className="alumni-bio">
                Founder and CEO of a successful renewable energy company that has brought solar power to 
                over 50,000 rural households across East Africa.
              </p>
            </div>
          </div>
        </div>
        
        <div className="alumni-profile-card">
          <div className="alumni-profile">
            <div className="alumni-image">Profile Image</div>
            <div className="alumni-info">
              <h3>Ms. Fatima Ainembabazi</h3>
              <p><strong>Class of 2001 | Law</strong></p>
              <p className="alumni-bio">
                Human rights lawyer and advocate who has represented over 200 cases of social injustice. 
                Recently appointed to the International Court of Justice.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="alumni-section">
        <h2 className="animate-fade-in-down">Connect with Alumni</h2>
        <div className="card">
          <p>
            Join our growing network of professionals and stay connected with fellow alumni across the globe.
          </p>
          <ul className="resource-list">
            <li>Access to the alumni directory</li>
            <li>Regional chapter events</li>
            <li>Professional networking platforms</li>
            <li>Mentorship opportunities</li>
          </ul>
          <button className="rwamusa-button">Join the Network</button>
        </div>
      </div>
      
    </div>
  );
};

export default AlumniNetworkPage;