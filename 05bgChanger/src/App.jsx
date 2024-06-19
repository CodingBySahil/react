import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("blue");

  return (
    <div
      style={{
        width: "100wh",
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          // left: "50",
          // right: "50%",
          // bottom: "50",
          // top: "50%",
        }}
      >
        <button
          onClick={() => setBgColor("red")}
          className="btn btn-lg m-2"
          style={{ color: "white",
            backgroundColor:"red",
           }}
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("olive")}
          className="btn btn-lg m-2"
          style={{ color: "white",
            backgroundColor:"olive",
           }}
        >
          olive
        </button>
        <button
          onClick={() => setBgColor("yellow")}
          className="btn btn-lg m-2"
          style={{ color: "white",
            backgroundColor:"yellow",
           }}
        >
          yellow
        </button>
        <button
          onClick={() => setBgColor("black")}
          className="btn btn-lg m-2"
          style={{ color: "white",
            backgroundColor:"black",
           }}
        >
          black
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="btn btn-lg m-2"
          style={{ color: "white",
            backgroundColor:"green",
           }}
        >
          green
        </button>
        <button
          onClick={() => setBgColor("white")}
          className="btn btn-lg m-2"
          style={{ color: "black",
            backgroundColor:"white",
           }}
        >
          white
        </button>
      </div>
    </div>
  );
};

export default App;
