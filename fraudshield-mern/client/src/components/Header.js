import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <span>🛡️</span>
        <span>FraudShield India</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/awareness">Awareness</Link>
        <Link to="/community">Community</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/report">Report</Link>
            <Link to="/quiz">Quiz</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
