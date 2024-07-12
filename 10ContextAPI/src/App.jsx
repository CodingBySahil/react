import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-center text-white bg-orange-400 text-2xl md:text-4xl lg:text-6xl p-4 m-4">
          Here we learn the Context API concept of React
        </h2>
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
          <Login />
        </div>
        <div className="w-full max-w-md p-4 mt-4 bg-white rounded-lg shadow-md">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
};

export default App;
