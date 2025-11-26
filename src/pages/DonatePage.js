import React from 'react';
import './DonatePage.css';

const DonatePage = () => {
  return (
    <div className="page-container donate-page">
      <h1 className="page-title">Support RWAMUSA</h1>
      
      <div className="donate-content">
        <div className="card">
          <h2 className="card-title">Make a Difference</h2>
          <p>
            Your generous support helps us continue our mission of fostering unity between alumni and current students, 
            providing educational opportunities, and creating positive impact in our communities.
          </p>
          <p>
            Every contribution, regardless of size, makes a meaningful difference in the lives of our students and alumni.
          </p>
        </div>
        
        <div className="donation-options">
          <div className="card donation-option">
            <h3>One-Time Donation</h3>
            <p>Make a single contribution to support our programs and initiatives.</p>
            <button className="rwamusa-button">Donate Now</button>
          </div>
          
          <div className="card donation-option">
            <h3>Monthly Giving</h3>
            <p>Provide ongoing support with a recurring monthly donation.</p>
            <button className="rwamusa-button">Set Up Monthly Donation</button>
          </div>
          
          <div className="card donation-option">
            <h3>Corporate Sponsorship</h3>
            <p>Partner with us to support our initiatives and gain visibility in our community.</p>
            <button className="rwamusa-button">Learn More</button>
          </div>
        </div>
        
        <div className="card">
          <h2 className="card-title">Ways Your Support Helps</h2>
          <div className="support-impact">
            <div className="impact-item">
              <h3>Scholarships</h3>
              <p>Your donations provide financial assistance to deserving students pursuing higher education.</p>
            </div>
            
            <div className="impact-item">
              <h3>Community Projects</h3>
              <p>Funding supports our initiatives that create positive change in local communities.</p>
            </div>
            
            <div className="impact-item">
              <h3>Events & Programs</h3>
              <p>Contributions help us organize networking events, workshops, and mentorship programs.</p>
            </div>
            
            <div className="impact-item">
              <h3>Infrastructure</h3>
              <p>Support goes toward maintaining our facilities and digital platforms for member engagement.</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="card-title">Other Ways to Give</h2>
          <ul className="other-giving-options">
            <li><strong>Planned Giving:</strong> Include RWAMUSA in your will or estate plans</li>
            <li><strong>Matching Gifts:</strong> Check if your employer matches charitable donations</li>
            <li><strong>Gifts in Kind:</strong> Donate equipment, supplies, or services</li>
            <li><strong>Stock Transfers:</strong> Make donations through stock or securities transfers</li>
          </ul>
          <button className="rwamusa-button secondary">Contact Us About Other Giving Options</button>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;