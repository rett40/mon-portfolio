// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail"; // Correction: suppression du caractère spécial "¨"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;