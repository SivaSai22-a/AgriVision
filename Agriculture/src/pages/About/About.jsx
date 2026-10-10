import React from "react";

function About() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center text-success">
          🌾 About Crop Yield Prediction System
        </h1>

        <p className="mt-4">
          Crop Yield Prediction System is an AI-based agricultural platform
          designed to help farmers predict crop production using important
          environmental and farming data.
        </p>

        <p>
          The system analyzes factors like soil type, temperature, rainfall,
          humidity, and crop details to provide better insights for farming
          decisions.
        </p>

        <h3 className="text-success mt-4">
          Key Features
        </h3>

        <ul>
          <li>🌱 AI-based crop yield prediction</li>
          <li>🌦 Weather information support</li>
          <li>📊 Prediction history tracking</li>
          <li>🌍 Farmer-friendly interface</li>
          <li>📈 Data-driven agriculture insights</li>
        </ul>

        <h3 className="text-success mt-4">
          Our Goal
        </h3>

        <p>
          Our goal is to support smart farming by using technology to improve
          productivity and help farmers make informed decisions.
        </p>

      </div>

    </div>
  );
}

export default About;