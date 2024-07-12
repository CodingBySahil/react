import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        className="px-4 py-2 text-white bg-orange-400 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
        onClick={(e) => {
          e.preventDefault();
          if (username && password) {
            setUser({ username, password });
            setError("");
          } else if (username) {
            setError("Please enter your password.");
          } else if (password) {
            setError("Please enter your username.");
          } else {
            setError("Please enter both username and password.");
          }
        }}
      >
        Submit
      </button>
      {/* Optional: Clear fields button */}
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        onClick={() => {
          setUsername("");
          setPassword("");
        }}
      >
        Clear Fields
      </button>
    </div>
  );
};

export default Login;
