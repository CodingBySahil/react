import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEbf1qHcYtWTxYDLbuk7doFONtIZ7u1Dw",
  authDomain: "firstproject-17374.firebaseapp.com",
  projectId: "firstproject-17374",
  storageBucket: "firstproject-17374.appspot.com",
  messagingSenderId: "603390437259",
  appId: "1:603390437259:web:4dc15d372da9d1eb32f18e",
  measurementId: "G-9L48619YPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "data"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "data"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostData(docs);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline bg-blue-600 p-6 text-white rounded-lg">
        Firebase Project
      </h1>

      <form
        className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-4"
          onChange={handleChange}
        />

        <label
          htmlFor="age"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Age
        </label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-4"
          onChange={handleChange}
        />

        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-4"
          onChange={handleChange}
        />

        <label
          htmlFor="address"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-6"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      <ul className="mt-8 w-full max-w-md bg-white rounded-lg shadow-md p-4">
        {postData.map((eachItem) => (
          <li key={eachItem.id} className="mb-4 p-4 border-b last:border-b-0">
            <h2 className="text-lg font-bold mb-1">Name: {eachItem.name}</h2>
            <p>Age: {eachItem.age}</p>
            <p>Email: {eachItem.email}</p>
            <p>Address: {eachItem.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
