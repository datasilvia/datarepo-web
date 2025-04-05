"use client";

import SourcesList from "@/components/SourcesList";
import ThemeToggle from "@/components/ThemeToggle";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6">

      {/* Botón de modo oscuro */}
      <ThemeToggle />

      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">Bienvenid@ a DataRepo</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-center max-w-2xl">
        Un directorio de fuentes de datos abiertas para tus proyectos de análisis, ciencia de datos y más.
      </p>

      <Link
        href="https://github.com/datasilvia/ProjectDataRepo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition"
      >
        Contribuir en GitHub
      </Link>

      <Link
        href="/about"
        className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Sobre el proyecto →
      </Link>

      <Link
        href="/contribuir"
        className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Cómo contribuir →
      </Link>



      {/* Componente con tarjetas y filtro */}
      <div className="mt-12 w-full">
        <SourcesList />
      </div>

      {/* Footer */}
      <div className="mt-12 text-gray-600 text-sm text-center">
        &copy; 2025 DataRepo - Todos los derechos reservados
      </div>
    </main>
  );
}
