import { TextField, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [text, setText] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    setText(
      `Name: ${data.name} Email: ${data.email} Password: ${data.password}`
    );
    setData({
      name: "",
      email: "",
      password: "",
    });
    console.log(data);
  };

  const takeData = (e) => {
    // const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Today we will learn Material UI
      </Typography>
      <Box
        component="form"
        onSubmit={submitData}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Type your name here"
          variant="outlined"
          onChange={takeData}
          value={data.name}
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Type your email here"
          variant="outlined"
          onChange={takeData}
          value={data.email}
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Type your password here"
          variant="outlined"
          onChange={takeData}
          value={data.password}
          name="password"
          type="password"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      <Typography variant="h6" component="h2" mt={4}>
        {text ? text : "Type something to preview that here"}
      </Typography>
    </Box>
  );
};

export default App;
