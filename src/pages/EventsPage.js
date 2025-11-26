import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="page-container events-page">
      <h1 className="page-title">Events</h1>
      
      <div className="events-section">
        <h2>Upcoming Events</h2>
        
        <div className="event-card">
          <h3>Alumni Mentorship Meetup</h3>
          <span className="event-date">March 15, 2024</span>
          <p><strong>Time:</strong> 6:00 PM - 9:00 PM</p>
          <p><strong>Location:</strong> Main Campus, Alumni Hall</p>
          <p>
            Connect with fellow alumni and current students in a relaxed setting. Share experiences, 
            offer guidance, and build meaningful professional relationships.
          </p>
          <button className="rwamusa-button">Register Now</button>
        </div>
        
        <div className="event-card">
          <h3>Seminar Series: Career Development</h3>
          <span className="event-date">April 5, 2024</span>
          <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
          <p><strong>Location:</strong> Virtual Event (Link will be sent upon registration)</p>
          <p>
            Join industry experts for insights on career planning, resume building, and interview skills. 
            Open to both alumni and students.
          </p>
          <button className="rwamusa-button">Register Now</button>
        </div>
        
        <div className="event-card">
          <h3>Annual Reunion</h3>
          <span className="event-date">June 20, 2024</span>
          <p><strong>Time:</strong> 10:00 AM - 6:00 PM</p>
          <p><strong>Location:</strong> University Grounds</p>
          <p>
            Our biggest annual event bringing together alumni from all graduating classes. Featuring 
            guest speakers, awards ceremony, and social activities.
          </p>
          <button className="rwamusa-button">Register Now</button>
        </div>
      </div>
      
      <div className="events-section past-events">
        <h2>Past Events</h2>
        
        <div className="event-card">
          <h3>Scholarship Awards Ceremony 2023</h3>
          <span className="event-date">November 10, 2023</span>
          <p>
            Celebrated the achievements of our scholarship recipients and recognized donors who made 
            these opportunities possible.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Fall Networking Mixer</h3>
          <span className="event-date">October 5, 2023</span>
          <p>
            Successful evening of professional networking with over 150 attendees from various industries.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Community Service Day</h3>
          <span className="event-date">September 16, 2023</span>
          <p>
            Volunteers helped refurbish the local community center, impacting over 200 families in the area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;