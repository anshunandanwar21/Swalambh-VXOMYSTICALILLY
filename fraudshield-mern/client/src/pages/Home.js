import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');

  // Mock data for Indian cities with threat levels
  const cities = [
    { name: 'Delhi', threatLevel: 'HIGH' },
    { name: 'Mumbai', threatLevel: 'MEDIUM' },
    { name: 'Bangalore', threatLevel: 'HIGH' },
    { name: 'Hyderabad', threatLevel: 'MEDIUM' },
    { name: 'Chennai', threatLevel: 'LOW' },
    { name: 'Kolkata', threatLevel: 'MEDIUM' },
    { name: 'Pune', threatLevel: 'HIGH' },
    { name: 'Jaipur', threatLevel: 'LOW' },
    { name: 'Ahmedabad', threatLevel: 'MEDIUM' },
    { name: 'Lucknow', threatLevel: 'MEDIUM' },
  ];

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'HIGH': return '#ff4444';
      case 'MEDIUM': return '#ffaa00';
      case 'LOW': return '#44aa44';
      default: return '#666';
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const selectedCityData = selectedCity ? cities.find(c => c.name === selectedCity) : null;

  return (
    <div className="home">
      <div className="alert">
        ⚠️ Stay alert! Phishing attempts are increasing. Report suspicious activities immediately.
      </div>

      <section className="hero">
        <div className="hero-content">
          <h1>Protecting India From Cyber Fraud</h1>
          <p>Smart Monitoring • Citizen Safety • AI Assistance</p>
          
          {/* City Selector */}
          <div className="city-selector">
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Select Your City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Threat Level Display */}
          {selectedCityData && (
            <div 
              className="threat-level-box"
              style={{ borderColor: getThreatLevelColor(selectedCityData.threatLevel) }}
            >
              <span style={{ color: getThreatLevelColor(selectedCityData.threatLevel) }}>
                Current City Threat Level: {selectedCityData.threatLevel}
              </span>
            </div>
          )}

          {/* Report Fraud Button */}
          <button 
            onClick={() => navigate('/report')} 
            className="btn-report-fraud"
          >
            Report Fraud Now
          </button>

          {/* Feature Buttons */}
          <div className="feature-buttons">
            <button 
              className="feature-btn alerts-btn"
              onClick={() => navigate('/dashboard')}
              title="View Alerts and Monitoring"
            >
              <div className="btn-icon">🔔</div>
              <div className="btn-label">Alerts</div>
            </button>
            <button 
              className="feature-btn heatmap-btn"
              onClick={() => navigate('/heatmap')}
              title="View Fraud Heatmap"
            >
              <div className="btn-icon">🗺️</div>
              <div className="btn-label">Heatmap</div>
            </button>
            <button 
              className="feature-btn report-btn"
              onClick={() => navigate('/report')}
              title="File a Report"
            >
              <div className="btn-icon">📝</div>
              <div className="btn-label">Report</div>
            </button>
            <button 
              className="feature-btn quiz-btn"
              onClick={() => navigate('/quiz')}
              title="Take Cybersecurity Quiz"
            >
              <div className="btn-icon">🎯</div>
              <div className="btn-label">Quiz</div>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hero-buttons">
            {!user ? (
              <>
                <button onClick={() => navigate('/login')} className="btn-primary">
                  Login
                </button>
                <button onClick={() => navigate('/awareness')} className="btn-secondary">
                  Learn More
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/dashboard')} className="btn-primary">
                  Go to Dashboard
                </button>
                <button onClick={() => navigate('/report')} className="btn-secondary">
                  Report Fraud
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose FraudShield?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Real-time Tracking</h3>
            <p>Monitor fraud cases and their status in real-time</p>
          </div>
          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Awareness Program</h3>
            <p>Learn about various cyber threats and prevention methods</p>
          </div>
          <div className="feature-card">
            <div className="icon">👥</div>
            <h3>Community Support</h3>
            <p>Share your experiences and learn from others</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎮</div>
            <h3>Interactive Quiz</h3>
            <p>Test your knowledge about cybersecurity</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Reports Filed</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Cities Covered</p>
        </div>
        <div className="stat">
          <h3>95%</h3>
          <p>Resolution Rate</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
