import React from "react";

function Admin() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center text-success">
          🛠 Admin Dashboard
        </h1>

        <p className="mt-4">
          Admin can manage users, crop data, prediction records,
          and system settings from this dashboard.
        </p>


        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h3>Users</h3>
              <p>Manage farmer accounts</p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h3>Data</h3>
              <p>Manage crop information</p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h3>Reports</h3>
              <p>View system reports</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;