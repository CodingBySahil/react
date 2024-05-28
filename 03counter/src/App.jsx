import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(4);
  return (
    <div
      style={{
        width: "50%",
        border: "1px solid red",
        backgroundColor: "black",
        color: "white",
        margin: "auto",
      }}
    >
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Click to Add 1</button>
      <button onClick={() => setCounter(counter - 1)}>Click to Subtract 1</button>
    </div>
  );
};

export default App;
