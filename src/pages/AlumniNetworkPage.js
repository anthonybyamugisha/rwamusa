import React from 'react';
import './AlumniNetworkPage.css';

const AlumniNetworkPage = () => {
  return (
    <div className="page-container alumni-network-page">
      <h1 className="page-title">Alumni Network</h1>
      
      <div className="alumni-section">
        <h2>Notable Alumni</h2>
        
        <div className="alumni-profile-card">
          <div className="alumni-profile">
            <div className="alumni-image">Profile Image</div>
            <div className="alumni-info">
              <h3>Dr. Elizabeth Nantume</h3>
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
              <h3>Mr. Robert Sentongo</h3>
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
              <h3>Ms. Fatima Kabanda</h3>
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
        <h2>Connect with Alumni</h2>
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
      
      <div className="alumni-section">
        <h2>Alumni Chapters</h2>
        <div className="card">
          <p>
            Connect with alumni in your region through our active chapter network.
          </p>
          <ul className="chapter-list">
            <li><strong>Kampala Chapter:</strong> Monthly networking dinners</li>
            <li><strong>New York Chapter:</strong> Professional development seminars</li>
            <li><strong>London Chapter:</strong> Cultural events and community service</li>
            <li><strong>Nairobi Chapter:</strong> Business networking mixers</li>
          </ul>
          <button className="rwamusa-button secondary">Find Your Chapter</button>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetworkPage;