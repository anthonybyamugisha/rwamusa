import React, { useState, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Add animations to contact cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      // Add animation class
      card.classList.add('animate-fade-in-up');
      // Add staggered delay
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container contact-page">
      <h1 className="page-title animate-fade-in-down">Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-info-section">
          <div className="card">
            <h2 className="card-title animate-fade-in-down">Get in Touch</h2>
            <p className="animate-fade-in-up">
              We'd love to hear from you! Whether you have questions about membership, events, or partnership opportunities, 
              our team is ready to assist you.
            </p>
            
            <div className="contact-details">
              <div className="contact-item animate-fade-in-up">
                <h3>Email</h3>
                <p>rwamusa7@gmail.com</p>
              </div>
              
              <div className="contact-item animate-fade-in-up">
                <h3>Phone</h3>
                <p>+256 787638563</p>
              </div>
              
              <div className="contact-item animate-fade-in-up">
                <h3>Address</h3>
                <p>Makerere University Kampala</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="card-title animate-fade-in-down">Office Hours</h2>
            <p className="animate-fade-in-up">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="animate-fade-in-up">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="animate-fade-in-up">Sunday: Closed</p>
          </div>
        </div>
        
        <div className="contact-form-section">
          <div className="card">
            <h2 className="card-title animate-fade-in-down">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group animate-fade-in-up">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-fade-in-up">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-fade-in-up">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-fade-in-up">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="rwamusa-button animate-fade-in-up">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;