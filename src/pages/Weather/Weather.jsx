import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    // Temporary data (later connect weather API)
    setWeather({
      temperature: "28°C",
      humidity: "65%",
      rainfall: "120 mm",
      condition: "Partly Cloudy",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h1 className="text-center text-success">
          🌦 Weather Information
        </h1>

        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="btn btn-success w-100 mt-3"
            onClick={handleSearch}
          >
            Check Weather
          </button>
        </div>


        {weather && (
          <div className="alert alert-success mt-4">

            <h3>
              Weather Report: {city}
            </h3>

            <p>
              🌡 Temperature: {weather.temperature}
            </p>

            <p>
              💧 Humidity: {weather.humidity}
            </p>

            <p>
              🌧 Rainfall: {weather.rainfall}
            </p>

            <p>
              ☁ Condition: {weather.condition}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Weather;