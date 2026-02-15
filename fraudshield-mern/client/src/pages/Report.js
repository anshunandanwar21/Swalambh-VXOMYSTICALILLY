import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../styles/Report.css';

const Report = () => {
  const { user, token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'fraud',
    severity: 'medium',
    location: { latitude: '', longitude: '' },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('/api/reports', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Report filed successfully! Thank you for reporting.');
      setFormData({
        title: '',
        description: '',
        category: 'fraud',
        severity: 'medium',
        location: { latitude: '', longitude: '' },
      });
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error filing report');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="report-container">
      <div className="report-form">
        <h1>File a Report</h1>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Report Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Brief title of the incident"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              placeholder="Detailed description of the incident"
              rows="5"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="fraud">Fraud</option>
                <option value="phishing">Phishing</option>
                <option value="malware">Malware</option>
                <option value="identity-theft">Identity Theft</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Severity *</label>
              <select name="severity" value={formData.severity} onChange={handleInputChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Latitude</label>
              <input
                type="text"
                name="location.latitude"
                placeholder="Location latitude (optional)"
                value={formData.location.latitude}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Longitude</label>
              <input
                type="text"
                name="location.longitude"
                placeholder="Location longitude (optional)"
                value={formData.location.longitude}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="submit-btn">
            {isLoading ? 'Filing Report...' : 'File Report'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
