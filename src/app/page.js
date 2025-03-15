"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datasilvia/ProjectDataRepo/main/sources.json")
      .then((response) => response.json())
      .then((data) => setSources(data))
      .catch((error) => console.error("Error fetching data sources:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenido a DataRepo</h1>
      <p className="text-lg text-gray-700 mt-4 text-center max-w-2xl">
        Un directorio de fuentes de datos abiertas para proyectos de Data Science.
      </p>
      <a href="https://github.com/datasilvia/ProjectDataRepo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
        Contribuir en GitHub
      </a>

      
      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Fuentes de Datos</h2>
      <ul className="mt-4 text-gray-700 text-lg">
        {sources.map((source, index) => (
          <li key={index} className="mt-2">
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {source.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-gray-600 text-sm">&copy; 2025 DataRepo - Todos los derechos reservados</div>
    </div>
  );
}
