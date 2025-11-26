import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="page-container projects-page">
      <h1 className="page-title">Projects & Impact</h1>
      
      <div className="projects-section">
        <h2>Community Garden Initiative</h2>
        <div className="project-card">
          <div className="project-image">Project Image</div>
          <p>
            Our flagship community project transforming vacant urban lots into productive gardens that provide 
            fresh produce to local families while creating educational opportunities for students.
          </p>
          <p><strong>Status:</strong> <span className="project-status">Phase 1 Complete</span> | Phase 2 Planning</p>
          <p className="project-impact"><strong>Impact:</strong> 200+ families served | 50+ student volunteers</p>
          <button className="rwamusa-button secondary">Learn More</button>
        </div>
      </div>
      
      <div className="projects-section">
        <h2>Educational Scholarship Program</h2>
        <div className="project-card">
          <div className="project-image">Project Image</div>
          <p>
            Providing financial support to deserving students who demonstrate academic excellence and community 
            involvement but lack the resources to pursue higher education.
          </p>
          <p><strong>Status:</strong> <span className="project-status">Active</span> | Applications Open</p>
          <p className="project-impact"><strong>Impact:</strong> 45 scholarships awarded | $180,000 distributed</p>
          <button className="rwamusa-button secondary">Apply Now</button>
        </div>
      </div>
      
      <div className="projects-section">
        <h2>Mentorship Program</h2>
        <div className="project-card">
          <div className="project-image">Project Image</div>
          <p>
            Connecting current students with accomplished alumni in their fields of interest to provide guidance, 
            networking opportunities, and career development support.
          </p>
          <p><strong>Status:</strong> <span className="project-status">Ongoing</span></p>
          <p className="project-impact"><strong>Impact:</strong> 120 mentor-mentee pairs | 85% satisfaction rate</p>
          <button className="rwamusa-button secondary">Become a Mentor</button>
        </div>
      </div>
      
      <div className="projects-section">
        <h2>Literacy Outreach</h2>
        <div className="project-card">
          <div className="project-image">Project Image</div>
          <p>
            Partnering with local schools to provide reading resources, volunteer tutors, and after-school 
            literacy programs for children in underserved communities.
          </p>
          <p><strong>Status:</strong> <span className="project-status">Active</span></p>
          <p className="project-impact"><strong>Impact:</strong> 3 schools partnered | 150 children supported</p>
          <button className="rwamusa-button secondary">Support This Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;