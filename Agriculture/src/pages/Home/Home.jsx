import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    image: "/images/farm1.jpg",
    title: "Crop Yield Prediction System",
    text: "Use AI-powered insights to make smarter farming decisions.",
  },
  {
    image: "/images/farm2.jpg",
    title: "Smart Agriculture",
    text: "Technology designed to support modern farming.",
  },
  {
    image: "/images/farm3.jpg",
    title: "Better Farming Decisions",
    text: "Analyze agricultural conditions and improve crop planning.",
  },
];

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  return (
    <main className="home-page">

      {/* HERO SLIDER */}
      <section className="home-hero">

        <img
          src={slides[currentSlide].image}
          alt="Agriculture"
          className="home-hero-image"
        />

        <div className="home-hero-overlay"></div>

        <button
          className="hero-control hero-control-left"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="home-hero-content">
          <span className="hero-label">AGRICULTURE AI</span>

          <h1>{slides[currentSlide].title}</h1>

          <p>{slides[currentSlide].text}</p>

          <button
            className="hero-button"
            onClick={() => navigate("/prediction")}
          >
            Start Prediction →
          </button>
        </div>

        <button
          className="hero-control hero-control-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* INTRO */}
      <section className="intro-section">
        <span className="section-label">AGRICULTURE AI</span>

        <h2>Intelligent Farming</h2>

        <p>
          Powerful tools designed to help modern farmers make
          smarter decisions.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="feature-card">
          <span className="feature-number">01</span>

          <h3>Crop Prediction</h3>

          <p>
            Analyze agricultural conditions and discover suitable
            crop recommendations using AI.
          </p>

          <button
            className="feature-link"
            onClick={() => navigate("/prediction")}
          >
            Try Prediction →
          </button>
        </div>

        <div className="feature-card">
          <span className="feature-number">02</span>

          <h3>Weather Analysis</h3>

          <p>
            Understand weather conditions and use them to make
            better farming decisions.
          </p>

          <button
            className="feature-link"
            onClick={() => navigate("/weather")}
          >
            Check Weather →
          </button>
        </div>

        <div className="feature-card">
          <span className="feature-number">03</span>

          <h3>Smart Dashboard</h3>

          <p>
            Monitor your agricultural information through a simple
            and organized dashboard.
          </p>

          <button
            className="feature-link"
            onClick={() => navigate("/dashboard")}
          >
            Open Dashboard →
          </button>
        </div>

      </section>

      {/* CTA */}
      <section className="home-cta">

        <span className="section-label">SMART AGRICULTURE</span>

        <h2>Technology For Better Farming</h2>

        <p>
          Make better agricultural decisions using AI-powered
          insights and farming data.
        </p>

        <button
          className="cta-button"
          onClick={() => navigate("/prediction")}
        >
          Explore Prediction →
        </button>

      </section>

    </main>
  );
}

export default Home;