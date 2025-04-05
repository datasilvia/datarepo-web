export const metadata = {
    title: "Sobre DataRepo | datarepo.es",
    description: "Conoce el propósito y la misión de este proyecto.",
  };
  
  export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Sobre el proyecto
        </h1>
  
        <article className="max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            <strong>DataRepo</strong> nace de una necesidad real: encontrar fuentes de datos abiertas,
            útiles y clasificadas sin perder tiempo navegando entre enlaces sueltos.
          </p>
  
          <p>
            Este proyecto fue creado por Silvia como parte de su portfolio profesional como
            <strong> analista de datos</strong>, pero también como una herramienta viva que puede crecer
            con las contribuciones de la comunidad.
          </p>
  
          <p>
            ¿Qué encontrarás aquí?
          </p>
            <ul className="list-disc list-inside mt-2">
              <li>Enlaces organizados por temática</li>
              <li>Un buscador rápido e intuitivo</li>
              <li>Un diseño sencillo, limpio y en evolución</li>
            </ul>
          
  
          <p>
            Si te gustaría aportar, corregir algo o simplemente recomendar una fuente interesante,
            puedes hacerlo fácilmente a través de GitHub o contactando conmigo.
          </p>
  
          <p>
            Gracias por visitar <strong>datarepo.es</strong> 💙
          </p>
        </article>
  
        <a
          href="https://github.com/datasilvia/ProjectDataRepo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          Contribuir en GitHub →
        </a>
      </main>
    );
  }
  