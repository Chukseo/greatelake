// src/components/Banner.jsx
import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Your future income is one decision away.</h1>
        <p>
          Start your journey toward financial stability with simple, guided training.
        </p>
        <button className="banner-btn">Enroll Now</button>
      </div>
    </section>
  );
}
