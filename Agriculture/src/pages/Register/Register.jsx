
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://127.0.0.1:5000";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleRegister = async (e) => {

    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    try {

      setLoading(true);

      const response = await fetch(`${API_URL}/register`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),

      });


      const data = await response.json();


      if (!response.ok) {

        alert(data.error || "Registration failed");

        return;

      }


      alert("🎉 Account created successfully!");

      navigate("/login");


    } catch (error) {

      console.log(error);

      alert("Backend connection failed");

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="container mt-5">

      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >

        <h1 className="text-center text-success">
          🌾 Create Account
        </h1>


        <p className="text-center text-muted">
          Join Agriculture AI System
        </p>


        <form
          className="mt-4"
          onSubmit={handleRegister}
        >


          {/* NAME */}

          <div className="mb-3">

            <label className="form-label">
              👤 Full Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>


          {/* EMAIL */}

          <div className="mb-3">

            <label className="form-label">
              📧 Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>


          {/* PASSWORD */}

          <div className="mb-3">

            <label className="form-label">
              🔒 Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div className="mb-3">

            <label className="form-label">
              🔐 Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

          </div>


          {/* REGISTER BUTTON */}

          <button
            className="btn btn-success w-100"
            type="submit"
            disabled={loading}
          >

            {loading
              ? "🔄 Creating Account..."
              : "🌱 Create Account"
            }

          </button>


        </form>


        {/* LOGIN */}

        <div className="text-center mt-4">

          <p>
            Already have an account?
          </p>

          <Link
            to="/login"
            className="btn btn-outline-success"
          >
            🔐 Login
          </Link>

        </div>


      </div>

    </div>

  );

}


// ⭐ THIS LINE IS VERY IMPORTANT

export default Register;
