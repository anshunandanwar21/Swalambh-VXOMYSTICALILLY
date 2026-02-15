import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About FraudShield India</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          FraudShield India is dedicated to combating cybercrime and fraud through awareness, 
          community reporting, and collaboration with authorities. We empower Indian citizens 
          to protect themselves and report cyber threats effectively.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Provide cybersecurity awareness and education</li>
          <li>Enable easy reporting of fraud and cyber crimes</li>
          <li>Building a community of informed citizens</li>
          <li>Track and visualize cybercrime hotspots</li>
          <li>Collaborate with law enforcement agencies</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@fraudshield.in</p>
          <p><strong>Phone:</strong> 1800-FRAUD-0 (1800-372-830)</p>
          <p><strong>Address:</strong> Cybersecurity Division, India</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Partner Organizations</h2>
        <div className="partners">
          <div className="partner">🏛️ Ministry of Electronics & IT</div>
          <div className="partner">🚔 Cyber Police</div>
          <div className="partner">🔐 CERT-In</div>
          <div className="partner">🌐 Tech Community</div>
        </div>
      </section>
    </div>
  );
};

export default About;
