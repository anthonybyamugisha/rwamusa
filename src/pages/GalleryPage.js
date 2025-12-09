import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="page-container gallery-page">
      <h1 className="page-title">Gallery</h1>
      
      <div className="gallery-section">
        <h2>Rwamusa Handover</h2>
        <p>
          Capturing the memorable moments from our recent leadership handover ceremony. 
          These images showcase the transition of leadership within RWAMUSA.
        </p>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/assets/images/hand_over_1.jpg" alt="Handover Ceremony 1" className="gallery-image" />
            <p>Handover Moment</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_2.jpg" alt="Handover Ceremony 2" className="gallery-image" />
            <p>Leadership Transition</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_3.jpg" alt="Handover Ceremony 3" className="gallery-image" />
            <p>Celebrating Continuity</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_4.jpg" alt="Handover Ceremony 4" className="gallery-image" />
            <p>New Beginnings</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_5.jpg" alt="Handover Ceremony 5" className="gallery-image" />
            <p>Community Support</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_6.jpg" alt="Handover Ceremony 6" className="gallery-image" />
            <p>Shared Vision</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_7.jpg" alt="Handover Ceremony 7" className="gallery-image" />
            <p>Cake Cutting</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_8.jpg" alt="Handover Ceremony 8" className="gallery-image" />
            <p>Awarding Certificates</p>
          </div>
          
          <div className="gallery-item">
            <img src="/assets/images/hand_over_9.jpg" alt="Handover Ceremony 9" className="gallery-image" />
            <p>Special Moment</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GalleryPage;