import React, { useState } from "react";

const TextUtility = () => {
  const [text, setText] = useState("");

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleReverse = () => setText(text.split("").reverse().join(""));
  const handleClear = () => setText("");
  const handleRemoveExtraSpaces = () => setText(text.replace(/\s+/g, " ").trim());

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characterCount = text.length;
  const readingTime = (wordCount * 0.08).toFixed(2);

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <h2 className="mb-3">Enter text and play with it</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="button-group mt-4">
            <button
              type="button"
              className="btn btn-outline-dark my-2 mx-1"
              onClick={handleUppercase}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className="btn btn-outline-dark my-2 mx-1"
              onClick={handleLowercase}
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              className="btn btn-outline-dark my-2 mx-1"
              onClick={handleReverse}
            >
              Reverse Text
            </button>
            <button
              type="button"
              className="btn btn-outline-dark my-2 mx-1"
              onClick={handleClear}
            >
              Clear Text
            </button>
            <button
              type="button"
              className="btn btn-outline-dark my-2 mx-1"
              onClick={handleRemoveExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </form>
      <div className="text-summary mt-4">
        <h2>Text Summary</h2>
        <h4>Words: {wordCount}</h4>
        <h4>Characters: {characterCount}</h4>
        <h4>Reading Time: {readingTime} seconds</h4>
      </div>
    </div>
  );
};

export default TextUtility;
