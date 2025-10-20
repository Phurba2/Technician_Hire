import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechnicianList from "./pages/TechnicianList";
import TechnicianDetails from "./pages/TechnicianDetails";
import HireForm from "./pages/HireForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technicians" element={<TechnicianList />} />
        <Route path="/technicians/:id" element={<TechnicianDetails />} />
        <Route path="/hire/:id" element={<HireForm />} />
      </Routes>
    </Router>
  );
}

export default App;
