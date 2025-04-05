export const metadata = {
    title: "Cómo contribuir | datarepo.es",
    description: "Guía paso a paso para contribuir a DataRepo fácilmente usando GitHub.",
  };
  
  export default function ContribuirPage() {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Cómo contribuir 🛠️
        </h1>
  
        <article className="max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            ¡Nos encanta que quieras colaborar con <strong>DataRepo</strong>! Aquí tienes una
            pequeña guía paso a paso para hacerlo, incluso si es tu primera vez usando GitHub.
          </p>
  
          <ol className="list-decimal list-inside space-y-3 text-base">
            <li>
              🔁 <strong>Haz un fork</strong> del repositorio en GitHub:<br />
              Ve a <a href="https://github.com/datasilvia/ProjectDataRepo" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">ProjectDataRepo</a> y haz clic en <em>"Fork"</em> (arriba a la derecha).
            </li>
            <li>
              📝 <strong>Edita el archivo `sources.json`</strong>:<br />
              Añade una nueva fuente con este formato:
              <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto mt-2">
  {`{
    "name": "Nombre de la fuente",
    "url": "https://ejemplo.com",
    "description": "Breve descripción de la fuente.",
    "category": "Categoría"
  }`}
              </pre>
            </li>
            <li>
              ✅ <strong>Valida que el JSON sea correcto</strong>:<br />
              Puedes usar una herramienta como <a href="https://jsonlint.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">jsonlint.com</a>.
            </li>
            <li>
              📬 <strong>Crea una pull request</strong>:<br />
              Cuando estés lista/o, haz clic en <em>"Pull request"</em> desde tu fork y GitHub te guiará.
            </li>
          </ol>
  
          <p>
            💡 Si es tu primera contribución, ¡no te preocupes! Cualquier duda puedes abrir un
            <a href="https://github.com/datasilvia/ProjectDataRepo/issues" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 dark:text-blue-400 underline">issue</a> y estaré encantada de ayudarte.
          </p>
  
          <p>
            ¡Gracias por formar parte de este proyecto abierto! 💙
          </p>
        </article>
      </main>
    );
  }
  