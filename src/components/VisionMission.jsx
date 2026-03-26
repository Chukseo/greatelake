// src/components/VisionMission.jsx
import React from "react";
import "./VisionMission.css";

// Import assets
import handshakeImg from "../assets/handshake.jpg";
import lightbulbIcon from "../assets/lightbulb.jpg";
// import networkOverlay from "../assets/network-overlay.png";

export default function VisionMission() {
  return (
    <section className="vision-mission">
      {/* Top headline at the very top */}
      <div className="vm-top">
        <h1 className="vm-top-heading">
          We focus on helping you build income, not just driving skills.
        </h1>
      </div>

      <div className="vm-container">
        {/* Left side */}
        <div className="vm-left">
          <h2 className="vm-heading">
            We Change Lives Through Career-Focused Training
          </h2>
          <p className="vm-subtext">
            With over 25 years of experience, Great Lake CDL Academy helps
            everyday people gain the skills, support, and job opportunities
            needed to build stable and rewarding careers.
          </p>

          <div className="vm-mission-vision">
            <div className="vm-mission">
              <h3>Mission</h3>
              <p>
                To change lives through practical CDL training that leads to
                real jobs and stable income.
              </p>
            </div>

            <div className="vm-icon">
              <img src={lightbulbIcon} alt="Lightbulb Icon" />
            </div>

            <div className="vm-vision">
              <h3>Vision</h3>
              <p>
                To be the most trusted pathway to financial stability through
                career-focused driver education.
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="vm-right">
          <img src={handshakeImg} alt="Handshake" className="vm-image" />
          <div className="vm-overlay">
            {/* <img src={networkOverlay} alt="Networking Overlay" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
