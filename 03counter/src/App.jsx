import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(4);
  return (
    <>
      <div class="card w-50 container mt-5 ">
        <div class="card-body">
          <h1 class="card-title">{counter}</h1>
          <button
            type="button"
            className="btn btn-primary btn-lg m-2"
            onClick={() => setCounter(counter + 1)}
          >
            Click to Add 1
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg m-2"
            onClick={() => setCounter(counter - 1)}
          >
            Click to Subtract 1
          </button>
        </div>
        <h3 class="card-text">
          You Recite{" "}
          <h1 className="d-inline">
            <b>{counter}</b>
          </h1>{" "}
          times
        </h3>
      </div>
    </>
  );
};

export default App;
