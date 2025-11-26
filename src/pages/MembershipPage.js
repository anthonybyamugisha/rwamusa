import React from 'react';
import './MembershipPage.css';

const MembershipPage = () => {
  return (
    <div className="page-container membership-page">
      <h1 className="page-title">Membership</h1>
      
      <div className="membership-section">
        <h2>Benefits of Joining RWAMUSA</h2>
        <div className="benefits-grid">
          <div className="card benefit-category">
            <h3>For Alumni</h3>
            <ul className="resource-list">
              <li>Access to exclusive networking events and reunions</li>
              <li>Mentorship opportunities with current students</li>
              <li>Professional development workshops and seminars</li>
              <li>Access to the alumni directory</li>
              <li>Opportunities to give back through scholarships and community projects</li>
            </ul>
          </div>
          
          <div className="card benefit-category">
            <h3>For Current Students</h3>
            <ul className="resource-list">
              <li>Connection with successful alumni in various fields</li>
              <li>Internship and job placement assistance</li>
              <li>Academic support and tutoring programs</li>
              <li>Leadership development opportunities</li>
              <li>Access to career guidance and counseling</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="membership-section">
        <h2>How to Become a Member</h2>
        <div className="card">
          <ol className="steps-list">
            <li>Fill out the membership application form</li>
            <li>Submit required documentation (transcripts, identification, etc.)</li>
            <li>Pay the membership fee (varies for alumni and students)</li>
            <li>Attend an orientation session</li>
            <li>Receive your membership packet and access credentials</li>
          </ol>
          <button className="rwamusa-button">Download Application Form</button>
        </div>
      </div>
      
      <div className="membership-section">
        <h2>Membership Fees</h2>
        <div className="card">
          <table className="fees-table">
            <thead>
              <tr>
                <th>Membership Type</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alumni Annual Membership</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Student Annual Membership</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Lifetime Membership (Alumni only)</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
          <p>All fees support our community initiatives, scholarships, and events.</p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;