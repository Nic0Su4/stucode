import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons"
import Curso from "./Curso"

const PrincipalCursos = () => {

  const cursos = {
    "HTML": {
      "titulo": "HTML desde cero",
      "calificacion": 4.5,
      "etiquetas": ["HTML", "Frontend", "Web"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
    "CSS": {
      "titulo": "CSS desde cero",
      "calificacion": 4.5,
      "etiquetas": ["CSS", "Frontend", "Web"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
    "JavaScript": {
      "titulo": "JavaScript desde cero",
      "calificacion": 4.5,
      "etiquetas": ["JavaScript", "Frontend", "Web"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
    "React": {
      "titulo": "React desde cero",
      "calificacion": 4.5,
      "etiquetas": ["React", "Frontend", "Web"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
    "Python": {
      "titulo": "Python desde cero",
      "calificacion": 4.5,
      "etiquetas": ["Python", "Backend", "IA"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
    "Django": {
      "titulo": "Django desde cero",
      "calificacion": 4.5,
      "etiquetas": ["Django", "Backend", "Web"],
      "imagen": "https://i.imgur.com/8XQ1h7C.png"
    },
  }

  return (
    <div className="mx-auto">
      <Header/>
      
      <div className="flex flex-col items-center md:flex-row justify-between w-3/5 mx-auto mt-10">
        <div className="flex gap-6">
          <p><FontAwesomeIcon icon={faFilter} /> Todos los filtros</p>
          <p><FontAwesomeIcon icon={faArrowDownAZ} /> Ordenar por</p>
        </div>
        <input type="text" placeholder="Buscar"
          className="border-2 border-gray-300 rounded-lg mt-4 md:mt-0 md:w-2/5 h-10 px-5 text-sm focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-8">
        {Object.values(cursos).map(curso => {
          return (
            <Curso
              key={curso}
              imagen={curso.imagen}
              titulo={curso.titulo}
              calificacion={curso.calificacion}
              etiquetas={curso.etiquetas}  
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default PrincipalCursos