import React from "react";

function Contact() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center text-success">
          📞 Contact Us
        </h1>

        <p className="text-center mt-3">
          Have questions about the Crop Yield Prediction System?
          Contact us for support and information.
        </p>

        <div className="mt-4">

          <h4 className="text-success">
            Contact Information
          </h4>

          <p>
            📍 Location: India
          </p>

          <p>
            📧 Email: ballasivasai679@gmail.com
          </p>

          <p>
            📞 Phone: +91 8886202631
          </p>

        </div>


        <h4 className="text-success mt-4">
          Send Message
        </h4>

        <form>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Your Name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Your Email"
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Your Message"
          ></textarea>


          <button className="btn btn-success w-100">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;