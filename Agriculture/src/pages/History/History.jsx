import React, { useEffect, useState } from "react";

function History() {

  const [history, setHistory] = useState([]);


  useEffect(() => {

    fetch("http://127.0.0.1:5000/history")
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="text-success text-center mb-4">
          🌾 Prediction History
        </h2>


        <table className="table table-bordered table-striped">

          <thead className="table-success">

            <tr>
              <th>Crop</th>
              <th>Soil Type</th>
              <th>Soil Quality</th>
              <th>Rainfall</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Fertilizer</th>
              <th>Predicted Yield</th>
              <th>Date</th>
            </tr>

          </thead>


          <tbody>

            {history.map((item) => (

              <tr key={item.id}>

                <td>{item.crop_name}</td>

                <td>{item.soil_type}</td>

                <td>{item.soil_quality}</td>

                <td>{item.rainfall}</td>

                <td>{item.temperature}</td>

                <td>{item.humidity}</td>

                <td>{item.fertilizer}</td>

                <td>{item.predicted_yield}</td>

                <td>{item.created_at}</td>

              </tr>

            ))}

          </tbody>


        </table>


        {history.length === 0 && (

          <h5 className="text-center text-muted">
            No prediction history available
          </h5>

        )}


      </div>

    </div>

  );

}


export default History;