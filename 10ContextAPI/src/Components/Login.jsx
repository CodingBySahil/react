import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setUser({ username, password });
    } else {
      setUser(null);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold text-center">Login</h2>
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
        onClick={handleLogin}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
