import React from 'react';
import myProfilePic from '../../images/myPic.jpeg';
import MyDetails from './components/MyDetails';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h4 className="text-xl font-bold text-gray-700 mb-4">Starting with the name of Allah Almighty who is the king of all kings</h4>
      <div className="flex flex-col items-center mb-6">
        <img src={myProfilePic} width={400} className="rounded-full shadow-lg mb-4" alt="My Profile Pic" />
        <h1 className="text-3xl font-bold text-gray-900">I am Muhammad Sahil</h1>
        <p className="text-gray-600">I am from Peshawar, student of BSCS in University of Peshawar</p>
      </div>
      <MyDetails />
    </div>
  );
}

export default App;
