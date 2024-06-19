import React, { useCallback, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Password = () => {
  let genPassword = "";
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("I am password");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const refToPassword = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) {
      str += "!#$%^&*()_+{},.?";
    }
    for (let i = 0; i < length; i++) {
      genPassword += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(genPassword);
  }, [length, numberAllowed, specialCharAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password);
    refToPassword.current?.select()
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Password Generator</h3>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <input
            type="text"
            readOnly
            value={password}
            className="form-control text-center"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            ref={refToPassword}
          />
          <button onClick={copyPassword}>Copy</button>
        </div>
        <div className="mb-3">
          <label htmlFor="range" className="form-label">
            Length: {length}
          </label>
          <input
            type="range"
            value={length}
            min={4}
            max={50}
            id="range"
            className="form-range"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            id="numberCheck"
            className="form-check-input"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberCheck" className="form-check-label">
            Number Allowed
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            id="specialCharCheck"
            className="form-check-input"
            checked={specialCharAllowed}
            onChange={() => setSpecialCharAllowed((prev) => !prev)}
          />
          <label htmlFor="specialCharCheck" className="form-check-label">
            Special Character Allowed
          </label>
        </div>
      </div>
    </div>
  );
};

export default Password;
