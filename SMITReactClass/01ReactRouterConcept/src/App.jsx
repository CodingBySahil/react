// For Library
import { Route, Routes } from "react-router-dom";
// importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// For Pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Mobile from "./Mobile";
import Error from "./Pages/Error";
import "./Style.css";

// Components
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
