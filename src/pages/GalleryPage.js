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
      
      <div className="gallery-section">
        <h2>Recent Activities</h2>
        <p>
          Browse through photos capturing the spirit of RWAMUSA events, gatherings, and community activities. 
          These images showcase the unity and vibrancy of our association.
        </p>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-image">Event Photo 1</div>
            <p>Annual Reunion 2023</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Event Photo 2</div>
            <p>Scholarship Awards Ceremony</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Event Photo 3</div>
            <p>Community Service Day</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Event Photo 4</div>
            <p>Fall Networking Mixer</p>
          </div>
        </div>
      </div>
      
      <div className="gallery-section">
        <h2>Alumni Gatherings</h2>
        <p>
          Memories from regional alumni meetups and international chapters. These gatherings strengthen 
          the bonds between our global community.
        </p>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-image">Alumni Photo 1</div>
            <p>New York Chapter Meetup</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Alumni Photo 2</div>
            <p>London Alumni Dinner</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Alumni Photo 3</div>
            <p>Kampala Regional Gathering</p>
          </div>
        </div>
      </div>
      
      <div className="gallery-section">
        <h2>Student Life</h2>
        <p>
          Moments from student-led initiatives, academic achievements, and campus life that showcase 
          the next generation of RWAMUSA members.
        </p>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-image">Student Photo 1</div>
            <p>Graduation Ceremony 2023</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Student Photo 2</div>
            <p>Student Leadership Conference</p>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image">Student Photo 3</div>
            <p>Intramural Sports Championship</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;