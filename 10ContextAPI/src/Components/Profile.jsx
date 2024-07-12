import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null); // Set user state to null
  };

  if (!user) {
    return <div className="text-center text-gray-500">Please login</div>;
  }
  return (
    <div className="text-center">
      <p className="text-lg">
        Welcome <span className="font-semibold">{user.username}</span>,
      </p>
      <p className="text-lg">
        Your password is <span className="font-semibold">{user.password}</span>
      </p>
      <button
        className="mt-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
