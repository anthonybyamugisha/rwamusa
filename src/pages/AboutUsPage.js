import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          The RwamparaMakerere University Students Association (RWAMUSA) is dedicated to fostering a strong community 
          between alumni and current students, promoting unity, growth and the continuation of our shared values and traditions. 
          Our head offices are located at Makerere University, Kampala, Uganda. We are expanding nationwide with chapters 
          from different universities across the country.
        </p>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2>Location</h2>
        <p>
          The Head offices of RWAMUSA are located at Makerere University Kampala Uganda.
        </p>
      </section>

      {/* Areas of Operation Section */}
      <section className="areas-of-operation-section">
        <h2>Areas of Operation</h2>
        <p>
          The Association (RWAMUSA) shall be national wide whereby we will have different chapters from different Universities across the country. However currently we started with Makerere University and so soon we are going to annex other Universities across the country.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <h2>RWAMUSA Leadership</h2>
        <div className="leadership-grid">
          {/* Patron and President Row */}
          <div className="leaders-row">
            {/* Patron */}
            <div className="leader-card">
              <img src="/assets/images/patron.jpg" alt="Patron" className="leader-image" />
              <h3 className="leader-name">Patron</h3>
              <p className="leader-position">Patron</p>
              <p className="leader-speech">
                As the patron of RWAMUSA, I am committed to guiding this organization towards excellence and ensuring that our values of unity, education, and service are upheld at all times. Together, we will continue to make a positive impact on our community.
              </p>
            </div>

            {/* President */}
            <div className="leader-card">
              <img src="/assets/images/president.jpg" alt="President" className="leader-image" />
              <h3 className="leader-name">President</h3>
              <p className="leader-position">President</p>
              <p className="leader-speech">
                It is my honor to serve as the President of RWAMUSA. I pledge to lead with integrity, foster unity among our members, and drive initiatives that will empower our youth and strengthen our community bonds.
              </p>
            </div>
          </div>

          {/* Other Leaders Row */}
          <div className="other-leaders-row">
            {/* Vice President */}
            <div className="leader-card">
              <img src="/assets/images/vice president.jpg" alt="Vice President" className="leader-image" />
              <h3 className="leader-name">Vice President</h3>
              <p className="leader-position">Vice President</p>
            </div>

            {/* Finance Minister */}
            <div className="leader-card">
              <img src="/assets/images/finance minister.jpg" alt="Finance Minister" className="leader-image" />
              <h3 className="leader-name">Finance Minister</h3>
              <p className="leader-position">Finance Minister</p>
            </div>

            {/* Speaker */}
            <div className="leader-card">
              <img src="/assets/images/speaker.jpg" alt="Speaker" className="leader-image" />
              <h3 className="leader-name">Speaker</h3>
              <p className="leader-position">Speaker</p>
            </div>

            {/* Vice Speaker */}
            <div className="leader-card">
              <img src="/assets/images/vice speaker.jpg" alt="Vice Speaker" className="leader-image" />
              <h3 className="leader-name">Vice Speaker</h3>
              <p className="leader-position">Vice Speaker</p>
            </div>

            {/* General Secretary */}
            <div className="leader-card">
              <img src="/assets/images/general secretary.jpg" alt="General Secretary" className="leader-image" />
              <h3 className="leader-name">General Secretary</h3>
              <p className="leader-position">General Secretary</p>
            </div>

            {/* Publicity */}
            <div className="leader-card">
              <img src="/assets/images/publicity.jpg" alt="Publicity" className="leader-image" />
              <h3 className="leader-name">Publicity</h3>
              <p className="leader-position">Publicity</p>
            </div>

            {/* Bugamba Representative */}
            <div className="leader-card">
              <img src="/assets/images/bugamba representative.jpg" alt="Bugamba Representative" className="leader-image" />
              <h3 className="leader-name">Bugamba Representative</h3>
              <p className="leader-position">Representative</p>
            </div>

            {/* Mwizi Representative */}
            <div className="leader-card">
              <img src="/assets/images/mwizi representative.jpg" alt="Mwizi Representative" className="leader-image" />
              <h3 className="leader-name">Mwizi Representative</h3>
              <p className="leader-position">Representative</p>
            </div>

            {/* Ndeija Representative */}
            <div className="leader-card">
              <img src="/assets/images/ndeija representative.jpg" alt="Ndeija Representative" className="leader-image" />
              <h3 className="leader-name">Ndeija Representative</h3>
              <p className="leader-position">Representative</p>
            </div>

            {/* Rugando Representative */}
            <div className="leader-card">
              <img src="/assets/images/Rugando representative.jpg" alt="Rugando Representative" className="leader-image" />
              <h3 className="leader-name">Rugando Representative</h3>
              <p className="leader-position">Representative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission section has been removed as requested */}
      {/* Core Values section has been removed as requested */}
    </div>
  );
};

export default AboutUsPage;