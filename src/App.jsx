

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechnicianList from "./pages/TechnicianList";
import TechnicianDetails from "./pages/TechnicianDetails";
import HireForm from "./pages/HireForm";
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <CTA />
            </>
          }
        />
        <Route path="/technicians" element={<TechnicianList />} />
        <Route path="/technicians/:id" element={<TechnicianDetails />} />
        <Route path="/hire/:id" element={<HireForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
