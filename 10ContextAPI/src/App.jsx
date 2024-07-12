import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-orange-400 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-white text-2xl font-semibold">codingBySahil</span>
            {/* You can add more links to navigate to different sections */}
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl mb-8">
            Context API in React Vite
          </h2>
          <div className="w-full max-w-md mx-auto mb-8 bg-white rounded-lg shadow-md p-4">
            <Login />
          </div>
          <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
            <Profile />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2024 My App. All rights reserved by codingBySahil.</p>
        </footer>
      </div>
    </UserContextProvider>
  );
};

export default App;
