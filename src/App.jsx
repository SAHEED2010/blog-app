import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/blog/Blog";
import Info from "./components/pages/info/Info";
import Notfound from "./components/pages/notfound/Notfound";

const App = () => {
  const [theme, setTheme] = useState("light");

  // 🌓 Apply dark mode class to the <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // 🔁 Toggle light/dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
