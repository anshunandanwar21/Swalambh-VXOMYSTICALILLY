import React from 'react';
import '../styles/Heatmap.css';

const Heatmap = () => {
  return (
    <div className="heatmap-container">
      <h1>Fraud Heatmap</h1>
      <p className="intro">View cybercrime hotspots across India</p>

      <div className="heatmap-content">
        <div className="map-placeholder">
          <div className="placeholder-text">
            🗺️ Interactive Heatmap
            <p>Region data visualization would be displayed here</p>
          </div>
        </div>

        <div className="hotspot-list">
          <h2>Top Hotspots</h2>
          <div className="hotspot-item high">
            <h4>Mumbai</h4>
            <p>234 cases | Critical</p>
          </div>
          <div className="hotspot-item high">
            <h4>Delhi</h4>
            <p>189 cases | Critical</p>
          </div>
          <div className="hotspot-item medium">
            <h4>Bangalore</h4>
            <p>145 cases | High</p>
          </div>
          <div className="hotspot-item medium">
            <h4>Hyderabad</h4>
            <p>98 cases | High</p>
          </div>
          <div className="hotspot-item low">
            <h4>Pune</h4>
            <p>52 cases | Medium</p>
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item"><span className="legend-high"></span> Critical</div>
        <div className="legend-item"><span className="legend-medium"></span> High</div>
        <div className="legend-item"><span className="legend-low"></span> Medium</div>
      </div>
    </div>
  );
};

export default Heatmap;
