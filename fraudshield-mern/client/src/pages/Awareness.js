import React from 'react';
import '../styles/Awareness.css';

const Awareness = () => {
  return (
    <div className="awareness-container">
      <h1>Cybersecurity Awareness</h1>
      <p className="intro">Learn about common cyber threats and how to protect yourself</p>

      <div className="awareness-grid">
        <div className="awareness-card">
          <h3>🎣 Phishing Attacks</h3>
          <p>Phishing is a fraudulent attempt to obtain sensitive information by disguising messages as trustworthy sources.</p>
          <ul>
            <li>Check sender's email address carefully</li>
            <li>Don't click suspicious links</li>
            <li>Verify requests by contacting the organization directly</li>
            <li>Look for spelling and grammar errors</li>
          </ul>
        </div>

        <div className="awareness-card">
          <h3>🦠 Malware</h3>
          <p>Malware is malicious software designed to harm your device or steal personal information.</p>
          <ul>
            <li>Keep your antivirus software updated</li>
            <li>Don't download from untrusted sources</li>
            <li>Use strong passwords</li>
            <li>Enable two-factor authentication</li>
          </ul>
        </div>

        <div className="awareness-card">
          <h3>🔐 Password Security</h3>
          <p>A strong password is your first line of defense against unauthorized access.</p>
          <ul>
            <li>Use at least 12 characters</li>
            <li>Mix uppercase, lowercase, numbers, and symbols</li>
            <li>Don't use personal information</li>
            <li>Use unique passwords for different accounts</li>
          </ul>
        </div>

        <div className="awareness-card">
          <h3>📱 Social Engineering</h3>
          <p>Social engineering manipulates people into divulging confidential information.</p>
          <ul>
            <li>Be cautious about what you share online</li>
            <li>Verify caller identity before sharing information</li>
            <li>Don't trust unsolicited requests</li>
            <li>Educate yourself and others</li>
          </ul>
        </div>

        <div className="awareness-card">
          <h3>💳 Identity Theft</h3>
          <p>Identity theft occurs when someone uses your personal information without permission.</p>
          <ul>
            <li>Monitor your bank and credit card statements</li>
            <li>Use secure networks for sensitive transactions</li>
            <li>Shred sensitive documents</li>
            <li>Report suspicious activity immediately</li>
          </ul>
        </div>

        <div className="awareness-card">
          <h3>🌐 Safe Online Browsing</h3>
          <p>Follow these practices to stay safe while browsing the internet.</p>
          <ul>
            <li>Use HTTPS websites</li>
            <li>Keep your browser updated</li>
            <li>Use a VPN on public WiFi</li>
            <li>Be cautious with downloads</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
