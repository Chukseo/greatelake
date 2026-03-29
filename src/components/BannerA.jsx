// src/components/Banner.jsx
import React from "react";
import "./BannerA.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Ready to get started?</h1>
        <p>
          Take the first step toward a high-demand, high-paying career today.
        </p>
        <button className="banner-btn">Enroll Now</button>
      </div>
    </section>
  );
}
