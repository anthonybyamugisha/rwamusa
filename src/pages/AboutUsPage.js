import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="page-container about-page">
      <h1 className="page-title">About RWAMUSA</h1>
      
      <div className="about-section">
        <h2>Organization Details</h2>
        <div className="card">
          <h3>Article 1: THE NAME OF THE ORGANIZATION</h3>
          <p>
            The name of the association shall be RwamparaMakerere University Students Association (RWAMUSA).
          </p>
          
          <h3>Article 2: LOCATION</h3>
          <p>
            The Head offices of RWAMUSA are located at Makerere University Kampala Uganda.
          </p>
          
          <h3>Article 3: AREAS OF OPERATION</h3>
          <p>
            The Association (RWAMUSA) shall be national wide whereby we will have different chapters from different 
            Universities across the country. However currently we started with Makerere University and so soon we are 
            going to annex other Universities across the country.
          </p>
        </div>
      </div>
      
      <div className="about-section">
        <h2>Article 4: VISION, MISSION, OBJECTIVES, ACTIVITIES AND VALUES</h2>
        <div className="card">
          <h3>Vision</h3>
          <p>
            Creating a strong, sustainable, morally sounding society majored by the young people.
          </p>
          
          <h3>Mission</h3>
          <p>
            To empower families and individual youth through self-awareness, skilling and advocacy.
          </p>
        </div>
      </div>
      
      <div className="about-section">
        <h2>Our Symbolism</h2>
        <div className="card symbolism-section">
          <div className="symbolism-item">
            <h3>Circular Badge</h3>
            <p>
              Represents wholeness, continuity, and community across generations. The circle has no beginning 
              or end, symbolizing the eternal bonds that connect us.
            </p>
          </div>
          
          <div className="symbolism-item">
            <h3>Scenic Landscape</h3>
            <p>
              Depicts green hills, mountains, and a rising sun, symbolizing hope, strength, and Uganda's 
              natural beauty. This imagery reminds us of our roots and the promising future ahead.
            </p>
          </div>
          
          <div className="symbolism-item">
            <h3>Open Book with Leaves</h3>
            <p>
              A powerful symbol of education and growth. The book represents learning and knowledge, while 
              the sprouting leaves reflect flourishing ideas and personal development.
            </p>
          </div>
          
          <div className="symbolism-item">
            <h3>Red Banner</h3>
            <p>
              Encircles the badge with the motto "OUR UNITY IS OUR STRENGTH", emphasizing solidarity 
              between past and present members. The red color signifies our shared passion and commitment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h2>Our Values</h2>
        <div className="card">
          <ul className="values-list">
            <li className="value-item"><strong>Unity:</strong> Strength through solidarity and shared purpose</li>
            <li className="value-item"><strong>Education:</strong> Lifelong learning and intellectual growth</li>
            <li className="value-item"><strong>Community:</strong> Building connections across generations</li>
            <li className="value-item"><strong>Service:</strong> Contributing positively to society</li>
            <li className="value-item"><strong>Excellence:</strong> Striving for the highest standards in all endeavors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;