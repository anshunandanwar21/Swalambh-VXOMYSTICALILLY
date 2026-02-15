import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import Quiz from './pages/Quiz';
import Awareness from './pages/Awareness';
import Community from './pages/Community';
import Heatmap from './pages/Heatmap';
import About from './pages/About';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/community" element={<Community />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
