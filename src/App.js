import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import ProjectDetails1 from "./projectDetails1";
import BIVermeg from './bi_project';

function App() {
  const [lang, setLang] = useState("fr");
  const [theme, setTheme] = useState("light");

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <Router>
      <div className={theme}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: 24,
            right: 100,
            zIndex: 2000,
            background: theme === "dark" ? "#222" : "#eee",
            color: theme === "dark" ? "#fff" : "#222",
            border: "none",
            borderRadius: "20px",
            padding: "0.5rem 1.2rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: "1rem",
            marginRight: "0.5rem",
          }}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Language Toggle Button */}
        <button
          onClick={toggleLang}
          style={{
            position: "fixed",
            top: 24,
            right: 32,
            zIndex: 2000,
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "0.5rem 1.2rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: "1rem",
          }}
          aria-label="Changer la langue"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home lang={lang} theme={theme} />} />
          <Route path="/projet/:id" element={<ProjectDetail lang={lang} theme={theme} />} />
          <Route path="/machine-learning" element={<ProjectDetails1 lang={lang} theme={theme} />} />
          <Route path="/bi-vermeg" element={<BIVermeg lang={lang} theme={theme} />} />
        </Routes>

        {/* Global theme styles */}
        <style>{`
          body, .light {
            background: #f7f9fa;
            color: #222;
            transition: background 0.3s, color 0.3s;
          }
          .dark {
            background: #181c22 !important;
            color: #f7f9fa !important;
            transition: background 0.3s, color 0.3s;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
