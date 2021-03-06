import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Job from "./pages/Job";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyJobs from "./pages/CompanyJobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "SET_USER", payload: user });
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:jobId" element={<Job />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company/:companyName" element={<CompanyJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
