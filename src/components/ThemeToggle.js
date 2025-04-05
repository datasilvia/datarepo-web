"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Si ya estaba activado en localStorage
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-200 text-sm text-gray-800 dark:bg-gray-800 dark:text-white shadow transition"
    >
      {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}
