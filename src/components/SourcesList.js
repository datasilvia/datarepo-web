"use client";

import { useState, useEffect } from "react";

export default function SourcesList() {
    const [sources, setSources] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [searchTerm, setSearchTerm] = useState("");

    const url = "https://raw.githubusercontent.com/datasilvia/ProjectDataRepo/main/sources.json";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSources(data))
            .catch((err) => console.error("Error cargando fuentes:", err));
    }, []);

    const categories = ["Todas", ...new Set(sources.map((s) => s.category))];

    // Filtrado por categoría y texto
    const filteredSources = sources.filter((source) => {
        const matchesCategory = selectedCategory === "Todas" || source.category === selectedCategory;
        const matchesSearch =
            source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            source.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Input de búsqueda */}
            <div className="mb-6 text-center">
            <input
  type="text"
  placeholder="Buscar fuente de datos..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full sm:w-96 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

            </div>

            {/* Botones de categoría */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm border font-medium transition ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 border-blue-600 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400"
                    } hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white`}
                  >
                    {cat}
                  </button>
                ))}
            </div>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSources.map((source, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-md p-5 transition hover:shadow-lg"
                    >

                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            {source.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {source.description}
                        </p>
                        <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Visitar fuente →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
