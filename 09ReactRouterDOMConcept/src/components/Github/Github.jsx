import React, { useState, useEffect } from "react";

const Github = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("codingbysahil");
  const [inputValue, setInputValue] = useState("");

  const fetchData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      setError(error);
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setUrl(inputValue);
  };

  if (error) {
    return (
      <div className="text-red-500 font-bold p-4">Error: {error.message}</div>
    );
  }

  if (!data) {
    return <div className="text-gray-500 font-medium p-4">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        GitHub Profile of <span className="text-blue-500">{data.login}</span>
      </h1>
      <img
        src={data.avatar_url}
        alt={`${data.login} avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <p className="text-lg font-medium">
        Followers: <span className="text-blue-500">{data.followers}</span>
      </p>
      <p className="text-lg font-medium">
        Public Repositories:{" "}
        <span className="text-blue-500">{data.public_repos}</span>
      </p>
      {data.bio && <p className="mt-4 text-gray-700">{data.bio}</p>}

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter your GitHub account name"
          value={inputValue}
          onChange={handleInputChange}
          className="border rounded px-4 py-2 w-full mb-2"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Search GitHub Account
        </button>
      </div>
    </div>
  );
};

export default Github;
