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
              <h3 className="leader-name">Major Arinaitwe Kagame</h3>
              <p className="leader-position">Patron</p>
              <p className="leader-speech">
                As the patron of RWAMUSA, I am committed to guiding this organization towards excellence and ensuring that our values of unity, education, and service are upheld at all times. Together, we will continue to make a positive impact on our community.
              </p>
            </div>

            {/* President */}
            <div className="leader-card">
              <img src="/assets/images/president.jpg" alt="President" className="leader-image" />
              <h3 className="leader-name">Nankunda Happy</h3>
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
              <h3 className="leader-name">Bwengye Dicklax</h3>
              <p className="leader-position">Vice President</p>
            </div>

            {/* Finance Minister */}
            <div className="leader-card">
              <img src="/assets/images/finance minister.jpg" alt="Finance Minister" className="leader-image" />
              <h3 className="leader-name">Nahamya Shanitah</h3>
              <p className="leader-position">Finance Minister</p>
            </div>

            {/* Speaker */}
            <div className="leader-card">
              <img src="/assets/images/speaker.jpg" alt="Speaker" className="leader-image" />
              <h3 className="leader-name">Aryamperera Brian</h3>
              <p className="leader-position">Speaker</p>
            </div>

            {/* Vice Speaker */}
            <div className="leader-card">
              <img src="/assets/images/vice speaker.jpg" alt="Vice Speaker" className="leader-image" />
              <h3 className="leader-name">Keinembabazi Blaire</h3>
              <p className="leader-position">Vice Speaker</p>
            </div>

            {/* General Secretary */}
            <div className="leader-card">
              <img src="/assets/images/general secretary.jpg" alt="General Secretary" className="leader-image" />
              <h3 className="leader-name">Arinda Patricia</h3>
              <p className="leader-position">General Secretary</p>
            </div>

            {/* Vice Secretary */}
            <div className="leader-card">
              <img src="/assets/images/vice secretary.jpg" alt="Vice Secretary" className="leader-image" />
              <h3 className="leader-name">Byamugisha Anthony</h3>
              <p className="leader-position">Vice Secretary</p>
            </div>

            {/* Publicity Secretary */}
            <div className="leader-card">
              <img src="/assets/images/publicity.jpg" alt="Publicity Secretary" className="leader-image" />
              <h3 className="leader-name">Ahereza Dickson</h3>
              <p className="leader-position">Publicity Secretary</p>
            </div>

            {/* Organizing Secretary */}
            <div className="leader-card">
              <img src="/assets/images/organising secretary.jpg" alt="Organizing Secretary" className="leader-image" />
              <h3 className="leader-name">Nahurira Anita</h3>
              <p className="leader-position">Organizing Secretary</p>
            </div>

            {/* Mwizi Representative */}
            <div className="leader-card">
              <img src="/assets/images/mwizi representative.jpg" alt="Mwizi Representative" className="leader-image" />
              <h3 className="leader-name">Nowamani Victor</h3>
              <p className="leader-position">Mwizi Representative</p>
            </div>

            {/* Bugamba Representative */}
            <div className="leader-card">
              <img src="/assets/images/bugamba representative.jpg" alt="Bugamba Representative" className="leader-image" />
              <h3 className="leader-name">Nyesiga Joseph</h3>
              <p className="leader-position">Bugamba S/C Representative</p>
            </div>

            {/* Ndeija Representative */}
            <div className="leader-card">
              <img src="/assets/images/ndeija representative.jpg" alt="Ndeija Representative" className="leader-image" />
              <h3 className="leader-name">Kamuhimbise Rinah</h3>
              <p className="leader-position">Ndeija Representative</p>
            </div>

            {/* Rugando Representative */}
            <div className="leader-card">
              <img src="/assets/images/Rugando representative.jpg" alt="Rugando Representative" className="leader-image" />
              <h3 className="leader-name">Kyoshabire Evas</h3>
              <p className="leader-position">Rugando Representative</p>
            </div>

            {/* MUBS Representative */}
            <div className="leader-card">
              <img src="/assets/images/Mubs_representative.jpg" alt="MUBS Representative" className="leader-image" />
              <h3 className="leader-name">Agaba Tobias</h3>
              <p className="leader-position">MUBS Representative</p>
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