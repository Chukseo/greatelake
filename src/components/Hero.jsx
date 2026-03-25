// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import truckDriverImg from "../assets/heroimg2.jpeg";

export default function Hero() {
  return (
    <section className="hero">
  <div className="hero-container">
    <div className="hero-content">
      <p className="trust-top">
        <span className="glow-dot"></span> Trusted by 20,000+ Happy Earners
      </p>

      <h1>Start a High-Paying Trucking Career in Michigan</h1>
      <p className="subtext">
        This is your pathway to stable, real income and a better future.
      </p>

      <div className="hero-buttons">
        <button className="btn-apply">Enroll Now</button>
        <a href="tel:+1234567890" className="btn-call">Call Now</a>
      </div>
    </div>

    <div className="hero-image">
      <img src={truckDriverImg} alt="Truck Driver" />
    </div>
  </div>

  {/* ✅ Place trust-bottom-container here, outside hero-container */}
  <div className="trust-bottom-container">
    <p className="trust-bottom">
      Trusted by 50,000+ businesses for innovative design and growth
    </p>
  </div>
</section>

  );
}
