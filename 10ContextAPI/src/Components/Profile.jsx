import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="text-center text-gray-500">Please login</div>;
  }
  return (
    <div className="text-center">
      <p className="text-lg">
        Welcome <span className="font-semibold">{user.username}</span>,
      </p>
      <p className="text-lg">
        your password is <span className="font-semibold">{user.password}</span>
      </p>
    </div>
  );
};

export default Profile;
