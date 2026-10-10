import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-success text-white d-flex align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Smart Crop Yield Prediction
            </h1>
            <p className="lead mt-3">
              Predict your crop yield using AI technology. 
              Get accurate insights based on soil, weather, and crop data.
            </p>

            <div className="mt-4">
              <button className="btn btn-light btn-lg me-3">
                Get Started
              </button>
              <button className="btn btn-outline-light btn-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
              alt="Agriculture"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;