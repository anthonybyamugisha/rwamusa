import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="page-container events-page">
      <h1 className="page-title">Events</h1>
      
      <div className="events-section">
        <h2>Upcoming Events</h2>
        
        <div className="event-card">
          <h3>Beach Bash</h3>
          <span className="event-date">February 21, 2026</span>
          <p>
            Join us for a fun-filled beach event with games, music, and relaxation.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Elders Football Match</h3>
          <span className="event-date">March 14 or 21, 2026</span>
          <p>
            Exciting football match featuring our elder members. Come support the teams!
          </p>
        </div>
        
        <div className="event-card">
          <h3>Launching of the Project</h3>
          <span className="event-date">April 11, 2026</span>
          <p>
            Official launch of our new community project initiative.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Rwamusa Retreat to Rwampara Schools</h3>
          <span className="event-date">July 10-12, 2026</span>
          <p>
            Educational retreat program visiting Rwampara schools to engage with students.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Friendly Match with Another Association</h3>
          <span className="event-date">September 5, 2026</span>
          <p>
            Friendly sports competition with a partner association.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Beach Bash + Handover or Handover Party</h3>
          <span className="event-date">October 24, 2026</span>
          <p>
            Combined celebration event featuring our annual beach bash and leadership handover ceremony.
          </p>
        </div>
        
        <div className="event-card">
          <h3>Any Activity Scheduled by Gakimusa</h3>
          <span className="event-date">TBD</span>
          <p>
            Special events organized by Gakimusa chapter to be announced.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default EventsPage;