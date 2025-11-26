import React from 'react';
import './StudentCornerPage.css';

const StudentCornerPage = () => {
  return (
    <div className="page-container student-corner-page">
      <h1 className="page-title">Student Corner</h1>
      
      <div className="student-section">
        <h2>Academic Resources</h2>
        <div className="resource-card">
          <p>
            Access study materials, research databases, and academic support services designed to help you 
            excel in your studies.
          </p>
          <ul className="resource-list">
            <li>Online library and journal access</li>
            <li>Study group formation platform</li>
            <li>Tutoring services matching</li>
            <li>Research grant opportunities</li>
          </ul>
          <button className="rwamusa-button">Access Resources</button>
        </div>
      </div>
      
      <div className="student-section">
        <h2>Career Development</h2>
        <div className="resource-card">
          <p>
            Prepare for your future career with our comprehensive career development programs and resources.
          </p>
          <ul className="resource-list">
            <li>Resume and cover letter workshops</li>
            <li>Mock interview sessions</li>
            <li>Industry networking events</li>
            <li>Internship and job placement assistance</li>
          </ul>
          <button className="rwamusa-button">Explore Opportunities</button>
        </div>
      </div>
      
      <div className="student-section">
        <h2>Leadership Programs</h2>
        <div className="resource-card">
          <p>
            Develop your leadership skills through our specialized programs and initiatives.
          </p>
          <ul className="resource-list">
            <li>Student government participation</li>
            <li>Community service project leadership</li>
            <li>Conference presentation opportunities</li>
            <li>Mentorship program involvement</li>
          </ul>
          <button className="rwamusa-button">Get Involved</button>
        </div>
      </div>
      
      <div className="student-section">
        <h2>Student Events</h2>
        <div className="resource-card">
          <p>
            Stay connected with fellow students through our various social and educational events.
          </p>
          <ul className="resource-list">
            <li>Monthly social mixers</li>
            <li>Academic seminar series</li>
            <li>Sports tournaments</li>
            <li>Cultural celebration events</li>
          </ul>
          <button className="rwamusa-button">View Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCornerPage;