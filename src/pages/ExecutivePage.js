import React from 'react';
import './ExecutivePage.css';

const ExecutivePage = () => {
  return (
    <div className="page-container executive-page">
      <h1 className="page-title">Executive Leadership</h1>
      
      <div className="executive-section">
        <h2>President</h2>
        <div className="executive-card">
          <div className="executive-profile">
            <div className="executive-image">Profile Image</div>
            <div className="executive-info">
              <h3>Dr. Samuel Mubarak</h3>
              <p><strong>Class of 1995 | Computer Science</strong></p>
              <p className="executive-bio">
                Dr. Mubarak brings over 20 years of experience in technology leadership, currently serving as 
                CTO of a leading tech firm. He is committed to advancing RWAMUSA's mission through innovation 
                and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="executive-section">
        <h2>Vice President</h2>
        <div className="executive-card">
          <div className="executive-profile">
            <div className="executive-image">Profile Image</div>
            <div className="executive-info">
              <h3>Ms. Grace Nakato</h3>
              <p><strong>Class of 2003 | Business Administration</strong></p>
              <p className="executive-bio">
                Ms. Nakato is a successful entrepreneur and business consultant with a passion for mentoring 
                young professionals. She oversees our mentorship programs and alumni engagement initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="executive-section">
        <h2>Secretary General</h2>
        <div className="executive-card">
          <div className="executive-profile">
            <div className="executive-image">Profile Image</div>
            <div className="executive-info">
              <h3>Mr. David Okello</h3>
              <p><strong>Class of 1998 | Law</strong></p>
              <p className="executive-bio">
                Mr. Okello is a practicing attorney and human rights advocate. He ensures our operations 
                align with our values and oversees governance matters within the association.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="executive-section">
        <h2>Treasurer</h2>
        <div className="executive-card">
          <div className="executive-profile">
            <div className="executive-image">Profile Image</div>
            <div className="executive-info">
              <h3>Ms. Sarah Namubiru</h3>
              <p><strong>Class of 2005 | Finance</strong></p>
              <p className="executive-bio">
                Ms. Namubiru is a certified financial analyst with expertise in nonprofit finance management. 
                She manages our financial resources and ensures transparent reporting to members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutivePage;