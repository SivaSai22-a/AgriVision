import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">

      <div className="card shadow p-5">

        <h1 className="display-1 text-danger">
          404
        </h1>

        <h2>
          Page Not Found
        </h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link 
          to="/" 
          className="btn btn-success"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;