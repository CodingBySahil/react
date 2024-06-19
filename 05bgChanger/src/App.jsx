import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = [
    { name: "Red", colorCode: "red" },
    { name: "Olive", colorCode: "olive" },
    { name: "Yellow", colorCode: "yellow" },
    { name: "Black", colorCode: "black" },
    { name: "Green", colorCode: "green" },
    { name: "White", colorCode: "white" },
    { name: "Blue", colorCode: "blue" },
    { name: "Purple", colorCode: "purple" },
    { name: "Orange", colorCode: "orange" },
    { name: "Pink", colorCode: "pink" },
    { name: "Brown", colorCode: "brown" },
    { name: "Grey", colorCode: "grey" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container-fluid ">
        <div className="row">
          <div className="text-center fixed-top mt-5">
            Click any button to change the background color respectively
          </div>
        </div>
        <div className="row mb-5 fixed-bottom">
          {colors.map((color, index) => (
            <div key={index} className="col-12 col-sm-3 col-md-2 col-lg-1 mb-2">
              <button
                onClick={() => setBgColor(color.colorCode)}
                className="btn btn-sm w-100"
                style={{
                  color:
                    color.colorCode === "yellow" || color.colorCode === "white"
                      ? "black"
                      : "white",
                  backgroundColor: color.colorCode,
                  border: "1px solid black",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {color.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
