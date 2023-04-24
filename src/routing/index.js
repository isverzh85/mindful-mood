import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/Landing/Landing";
import DiaryEntry from "../Pages/DiaryEntry/DiaryEntry";

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/diary" element={<DiaryEntry />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;

  