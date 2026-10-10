import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const API_URL = "http://127.0.0.1:5000";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }


    try {

      setLoading(true);


      const response = await fetch(`${API_URL}/login`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email: email,
          password: password
        })

      });


      const data = await response.json();


      if (response.ok) {

        // =========================================
        // SAVE USER LOGIN INFORMATION
        // =========================================

        localStorage.setItem(
          "user_id",
          String(data.user_id)
        );


        if (data.name) {

          localStorage.setItem(
            "user_name",
            data.name
          );

        }


        if (data.email) {

          localStorage.setItem(
            "user_email",
            data.email
          );

        } else {

          localStorage.setItem(
            "user_email",
            email
          );

        }


        // =========================================
        // IMPORTANT
        // TELL NAVBAR THAT LOGIN WAS SUCCESSFUL
        // =========================================

        window.dispatchEvent(
          new Event("loginStatusChanged")
        );


        console.log(
          "Login successful. User ID:",
          localStorage.getItem("user_id")
        );


        alert("Login successful");


        // =========================================
        // OPEN PROFILE
        // =========================================

        navigate("/profile");

      } else {

        alert(
          data.error || "Login failed"
        );

      }

    } catch (error) {

      console.error(
        "Login error:",
        error
      );

      alert("Backend connection failed");

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="login-page">

      <div className="login-wrapper">


        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="login-introduction">

          <div className="login-brand">
            Agriculture <span>AI</span>
          </div>


          <div className="login-line"></div>


          <h1>
            Smart Farming.
            <br />
            Smarter Decisions.
          </h1>


          <p>
            Use intelligent agricultural technology to
            analyze weather, soil and crop conditions
            for better farming decisions.
          </p>


          <div className="login-features">

            <div>
              <strong>
                AI Prediction
              </strong>

              <span>
                Intelligent crop yield analysis
              </span>
            </div>


            <div>
              <strong>
                Weather Intelligence
              </strong>

              <span>
                Real-time weather information
              </span>
            </div>


            <div>
              <strong>
                Farm Dashboard
              </strong>

              <span>
                Monitor your farming insights
              </span>
            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="login-card">

          <div className="login-card-header">

            <h2>
              Welcome back
            </h2>

            <p>
              Login to your Agriculture AI account
            </p>

          </div>


          <form onSubmit={handleLogin}>


            {/* EMAIL */}

            <div className="login-field">

              <label>
                Email Address
              </label>


              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* PASSWORD */}

            <div className="login-field">

              <label>
                Password
              </label>


              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            {/* LOGIN BUTTON */}

            <button
              className="login-button"
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Logging in..."
                : "Login to Agriculture AI"
              }

            </button>

          </form>


          {/* REGISTER */}

          <div className="login-register">

            <span>
              Don't have an account?
            </span>


            <Link to="/register">
              Create an account
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}


export default Login;