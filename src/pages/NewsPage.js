import React from 'react';
import './NewsPage.css';

const NewsPage = () => {
  return (
    <div className="page-container news-page">
      <h1 className="page-title">News & Updates</h1>
      
      <div className="news-article">
        <h2>New Scholarship Program Launching in 2024</h2>
        <span className="news-date">Published: January 15, 2024</span>
        <p className="news-excerpt">
          RWAMUSA is proud to announce the launch of three new scholarship programs for the 2024 academic year. 
          These scholarships are designed to support students in financial need who demonstrate academic excellence 
          and community involvement.
        </p>
        <p>
          The new programs include the Unity Scholarship, the Excellence Award, and the Community Impact Grant. 
          Applications will open on February 1st, 2024.
        </p>
        <button className="rwamusa-button">Read More</button>
      </div>
      
      <div className="news-article">
        <h2>Call for Nominations: Outstanding Alumni Award 2024</h2>
        <span className="news-date">Published: January 10, 2024</span>
        <p className="news-excerpt">
          We are now accepting nominations for the RWAMUSA Outstanding Alumni Award 2024. This prestigious award 
          recognizes alumni who have made significant contributions to their profession, community, or society.
        </p>
        <p>
          Nominees should demonstrate excellence in their field, commitment to community service, and embody 
          the values of RWAMUSA. The deadline for submissions is March 1st, 2024.
        </p>
        <button className="rwamusa-button">Nominate Someone</button>
      </div>
      
      <div className="news-article">
        <h2>Annual Reunion Registration Now Open</h2>
        <span className="news-date">Published: December 20, 2023</span>
        <p className="news-excerpt">
          Registration for our Annual Reunion on June 20, 2024 is now open. This year's event promises to be 
          our largest yet, with special guest speakers, networking opportunities, and celebrations for milestone 
          graduating classes.
        </p>
        <p>
          Early bird registration is available until March 31st, 2024. Don't miss this opportunity to reconnect 
          with classmates and celebrate our shared heritage.
        </p>
        <button className="rwamusa-button">Register Now</button>
      </div>
      
      <div className="news-article">
        <h2>RWAMUSA Community Garden Project Update</h2>
        <span className="news-date">Published: December 5, 2023</span>
        <p className="news-excerpt">
          Our Community Garden Project has successfully completed its first phase, with over 200 volunteers 
          contributing to the creation of a sustainable urban garden space.
        </p>
        <p>
          The garden now provides fresh produce to local families and serves as an educational space for 
          students. Phase two planning is underway for spring 2024.
        </p>
        <button className="rwamusa-button">Read More</button>
      </div>
    </div>
  );
};

export default NewsPage;