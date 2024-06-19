import React, { useCallback } from "react";
import { useState, useEffect } from "react";

const Password = () => {
  let genPassword;
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("I am password");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!#$%^&*()_+{},.?";
    for (let i = 0; i < pass.length; i++) {
      genPassword += pass.charAt(i);
    }
    console.log(genPassword);
  }, [length, setLength,setPassword, numberAllowed, specialCharAllowed]);

  return (
    <div>
      <h3>Password Generator</h3>
      <input type="text" readOnly value={password} />
      <br />
      <input
        type="range"
        value={length}
        min={8}
        max={30}
        id="range"
        onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="range">Length ( {length} )</label>
      <br />
      <input
        type="checkbox"
        id="numberCheck"
        onClick={(prev) => setNumberAllowed(!prev)}
      />
      <label htmlFor="numberCheck">Number Allowed </label>
      <br />
      <input
        type="checkbox"
        id="specailCharCheck"
        onClick={(prev) => setSpecialCharAllowed(!prev)}
      />
      <label htmlFor="specailCharCheck">Speacial Character Allowed</label>
    </div>
  );
};

export default Password;
