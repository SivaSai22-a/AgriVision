import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* HERO SLIDER */}
      <section className="home-hero-section">
        <div
          id="agricultureCarousel"
          className="carousel slide carousel-fade home-carousel"
          data-bs-ride="carousel"
          data-bs-interval="2000"
          data-bs-pause="false"
        >
          <div className="carousel-indicators home-indicators">
            <button type="button" data-bs-target="#agricultureCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#agricultureCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#agricultureCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/farm1.jpg" className="home-hero-image" alt="Agricultural farm" />
              <div className="home-hero-overlay" />
              <div className="home-hero-content">
                <span className="home-hero-label">AGRICULTURE AI</span>
                <h1>Crop Yield <span>Prediction System</span></h1>
                <p>Use intelligent farming data to make smarter crop decisions.</p>
                <button type="button" className="home-hero-button" onClick={() => navigate("/prediction")}>
                  Start Prediction <span>→</span>
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/farm2.jpg" className="home-hero-image" alt="Agricultural field" />
              <div className="home-hero-overlay" />
              <div className="home-hero-content">
                <span className="home-hero-label">SMART AGRICULTURE</span>
                <h1>Technology for <span>Better Farming</span></h1>
                <p>Turn agricultural information into practical farming insights.</p>
                <button type="button" className="home-hero-button" onClick={() => navigate("/prediction")}>
                  Explore Prediction <span>→</span>
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/farm3.jpg" className="home-hero-image" alt="Smart farming" />
              <div className="home-hero-overlay" />
              <div className="home-hero-content">
                <span className="home-hero-label">AI POWERED AGRICULTURE</span>
                <h1>Grow Smarter. <span>Farm Better.</span></h1>
                <p>AI-powered tools designed for modern agricultural decisions.</p>
                <button type="button" className="home-hero-button" onClick={() => navigate("/prediction")}>
                  Start Prediction <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Simple < and > controls */}
          <button className="home-carousel-control home-carousel-prev" type="button" data-bs-target="#agricultureCarousel" data-bs-slide="prev" aria-label="Previous slide">
            <span aria-hidden="true">‹</span>
          </button>
          <button className="home-carousel-control home-carousel-next" type="button" data-bs-target="#agricultureCarousel" data-bs-slide="next" aria-label="Next slide">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">AGRICULTURE AI</span>
            <h2>Intelligent Farming</h2>
            <p>Powerful tools designed to help modern farmers make smarter decisions.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>
              <h3>Crop Prediction</h3>
              <p>Analyze agricultural conditions and discover suitable crop recommendations using AI.</p>
              <button type="button" className="feature-link" onClick={() => navigate("/prediction")}>Try Prediction <span>→</span></button>
            </article>

            <article className="feature-card">
              <span className="feature-number">02</span>
              <h3>Weather Analysis</h3>
              <p>Understand weather conditions and use them to make better farming decisions.</p>
              <button type="button" className="feature-link" onClick={() => navigate("/weather")}>Check Weather <span>→</span></button>
            </article>

            <article className="feature-card">
              <span className="feature-number">03</span>
              <h3>Smart Dashboard</h3>
              <p>Monitor your agricultural information through a simple and organized dashboard.</p>
              <button type="button" className="feature-link" onClick={() => navigate("/dashboard")}>Open Dashboard <span>→</span></button>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="cta-content">
          <span className="section-label">SMART AGRICULTURE</span>
          <h2>Make Better Farming Decisions</h2>
          <p>Use AI-powered crop prediction and agricultural information to support your farming decisions.</p>
          <button type="button" className="cta-button" onClick={() => navigate("/prediction")}>
            Start Your Prediction <span>→</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-content">
          <div>
            <h3>Agriculture <span>AI</span></h3>
            <p>Intelligent technology for modern agriculture.</p>
          </div>
          <div className="footer-copy">© 2026 Agriculture AI System. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
