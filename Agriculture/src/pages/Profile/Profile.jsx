import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");
  const userName = localStorage.getItem("user_name");
  const userEmail = localStorage.getItem("user_email");

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");

    alert("You have been logged out");

    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-container">

        {/* PROFILE HEADER */}
        <div className="profile-header">

          <div className="profile-avatar">
            {userName
              ? userName.charAt(0).toUpperCase()
              : "U"}
          </div>

          <h1>
            {userName || "User Profile"}
          </h1>

          <p>
            Agriculture AI Member
          </p>

        </div>

        {/* PERSONAL INFORMATION */}
        <div className="profile-card">

          <h2>
            Personal Information
          </h2>

          <div className="profile-info">

            <div className="info-item">
              <span className="info-label">
                Full Name
              </span>

              <span className="info-value">
                {userName || "Not available"}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">
                Email Address
              </span>

              <span className="info-value">
                {userEmail || "Not available"}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">
                User ID
              </span>

              <span className="info-value">
                {userId || "Not available"}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">
                Account Status
              </span>

              <span className="status">
                Active
              </span>
            </div>

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="profile-card">

          <h2>
            Quick Actions
          </h2>

          <div className="profile-actions">

            <button
              onClick={() => navigate("/prediction")}
              className="profile-button primary"
            >
              Make Prediction
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="profile-button secondary"
            >
              View Dashboard
            </button>

            <button
              onClick={() => navigate("/weather")}
              className="profile-button secondary"
            >
              Check Weather
            </button>

          </div>

        </div>

        {/* LOGOUT */}
        <div className="logout-section">

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;