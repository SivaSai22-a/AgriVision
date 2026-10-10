import React, { useState } from "react";

function Predict() {
  const [formData, setFormData] = useState({
    rainfall: "",
    temperature: "",
    soil: "",
    humidity: "",
    crop_name: "",
    soil_type: "",
    fertilizer: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = () => {
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rainfall: Number(formData.rainfall),
        temperature: Number(formData.temperature),
        soil_quality: Number(formData.soil),   // ✅ FIXED
        humidity: Number(formData.humidity),
        crop: formData.crop_name,              // ✅ FIXED
        soil_type: formData.soil_type,
        fertilizer: formData.fertilizer
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert("Error: " + data.error);
        } else {
          alert("🌾 Prediction: " + data.prediction);
        }
      })
      .catch(err => {
        console.error(err);
        alert("❌ Backend not running!");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌾 Crop Yield Prediction</h2>

      <input name="rainfall" placeholder="Rainfall" onChange={handleChange} /><br /><br />
      <input name="temperature" placeholder="Temperature" onChange={handleChange} /><br /><br />
      <input name="soil" placeholder="Soil Quality" onChange={handleChange} /><br /><br />
      <input name="humidity" placeholder="Humidity" onChange={handleChange} /><br /><br />

      <input name="crop_name" placeholder="Crop" onChange={handleChange} /><br /><br />
      <input name="soil_type" placeholder="Soil Type" onChange={handleChange} /><br /><br />
      <input name="fertilizer" placeholder="Fertilizer" onChange={handleChange} /><br /><br />

      <button onClick={handlePredict}>Predict</button>
    </div>
  );
}

export default Predict;