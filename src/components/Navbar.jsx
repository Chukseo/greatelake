// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import { useState } from "react";

// ✅ Import logo image
import logo from "../assets/logo.png";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo + Company Name */}
      <div className="navbar-left">
        <img src={logo} alt="Great Lake CDL Logo" className="navbar-logo" />
        <span className="navbar-brand">Great Lake CDL</span>
      </div>

      {/* Hamburger icon (mobile only) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Center + Right combined for mobile */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        <div className="navbar-right">
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="btn-admin">Admin</Link>
              <button onClick={logout} className="btn-logout">Logout</button>
            </>
          ) : (
            <Link to="/admin-login" className="btn-admin">Sign in as Admin</Link>
          )}
          <Link to="/application-form" className="btn-apply">Apply Now</Link>
        </div>
      </div>
    </nav>
  );
}
