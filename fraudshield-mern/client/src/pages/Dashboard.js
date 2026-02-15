import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [reports, setReports] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchReports();
  }, [user, token]);

  const fetchReports = async () => {
    try {
      const response = await axios.get('/api/reports', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReports(response.data);
      
      // Calculate stats
      const total = response.data.length;
      const pending = response.data.filter(r => r.status === 'pending').length;
      const resolved = response.data.filter(r => r.status === 'resolved').length;
      setStats({ total, pending, resolved });
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Reports</p>
        </div>
        <div className="stat-card pending">
          <h3>{stats.pending}</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card resolved">
          <h3>{stats.resolved}</h3>
          <p>Resolved</p>
        </div>
      </div>

      <section className="reports-section">
        <h2>Your Reports</h2>
        {reports.length === 0 ? (
          <p className="no-reports">No reports filed yet. <button onClick={() => navigate('/report')}>File a Report</button></p>
        ) : (
          <table className="reports-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Severity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id}>
                  <td>{report.title}</td>
                  <td>{report.category}</td>
                  <td><span className={`status ${report.status}`}>{report.status}</span></td>
                  <td>{report.severity}</td>
                  <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
