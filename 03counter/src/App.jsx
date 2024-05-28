import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(4);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 text-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h1 className="card-title display-1">{counter}</h1>
          <button
            type="button"
            className="btn btn-success btn-lg m-2"
            onClick={() => setCounter(counter + 1)}
          >
            Click to Add 1
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg m-2"
            onClick={() => setCounter(counter - 1)}
          >
            Click to Subtract 1
          </button>
        </div>
        <div className="card-footer bg-transparent">
          <h3 className="card-text">
            You Recite{" "}
            <h1 className="d-inline">
              <b>{counter}</b>
            </h1>{" "}
            times
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
