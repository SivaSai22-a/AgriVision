import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className="site-navbar">

      <div className="site-navbar-inner">

        {/* LOGO */}
        <Link to="/" className="site-logo">
          <span className="site-logo-main">
            Agriculture <strong>AI</strong>
          </span>

          <span className="site-logo-subtitle">
            Intelligent Farming
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="site-navigation">

          <Link
            to="/"
            className={`nav-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/prediction"
            className={`nav-item ${
              location.pathname === "/prediction" ? "active" : ""
            }`}
          >
            Prediction
          </Link>

          <Link
            to="/dashboard"
            className={`nav-item ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/contact"
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>

        </nav>

        {/* LOGIN ONLY */}
        <div className="site-navbar-actions">

          <Link to="/login" className="nav-login">
            Login
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;