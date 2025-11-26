import React from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="page-container privacy-policy-page">
      <h1 className="page-title">Privacy Policy</h1>
      
      <div className="card">
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <p>
          RWAMUSA ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy 
          explains how we collect, use, disclose, and safeguard your information when you visit our 
          website and use our services. Please read this privacy policy carefully. If you do not agree 
          with the terms of this privacy policy, please do not access the site.
        </p>
      </div>
      
      <div className="card">
        <h2 className="card-title">Information We Collect</h2>
        
        <h3>Personal Information</h3>
        <p>
          We may collect personally identifiable information, such as your name, email address, phone 
          number, and other information when you voluntarily submit it to us. This includes information 
          you provide when registering for membership, signing up for events, or contacting us.
        </p>
        
        <h3>Non-Personal Information</h3>
        <p>
          We may also collect non-personal information about you automatically when you visit our site. 
          This information might include your IP address, browser type, operating system, and other 
          technical information about your means of access.
        </p>
      </div>
      
      <div className="card">
        <h2 className="card-title">How We Use Your Information</h2>
        <p>We may use the information we collect from you for various purposes, including:</p>
        <ul>
          <li>To provide, maintain, and improve our services</li>
          <li>To communicate with you, including responding to your inquiries</li>
          <li>To process transactions and send related information</li>
          <li>To send periodic emails, newsletters, and updates</li>
          <li>To monitor and analyze usage and trends</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="card-title">Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations:</p>
        <ul>
          <li><strong>With Service Providers:</strong> We may share your information with third-party 
          service providers who perform services on our behalf.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do 
          so by law or in response to valid requests by public authorities.</li>
          <li><strong>Business Transfers:</strong> We may transfer your information in connection 
          with a merger, acquisition, or sale of assets.</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="card-title">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to protect your personal 
          information. While we have taken reasonable steps to secure the personal information you 
          provide to us, please be aware that despite our efforts, no security measures are perfect 
          or impenetrable.
        </p>
      </div>
      
      <div className="card">
        <h2 className="card-title">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: privacy@rwamusa.org<br/>
          Phone: +1 (555) 123-4567<br/>
          Address: 123 University Ave, City, Country
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;