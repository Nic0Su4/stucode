import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import Curso from "./Curso";
import { Link } from "react-router-dom";

const PrincipalCursos = () => {
  const cursos = {
    HTML: {
      titulo: "HTML y CSS desde cero",
      calificacion: 4.5,
      etiquetas: ["HTML", "Frontend", "Web"],
      imagen:
        "https://i.ytimg.com/vi/XqFR2lqBYPs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCLMP63Mc0WahbyjDWDwEp4QqZ3Ow",
    },
    CSS: {
      titulo: "Curso de 0 CSS",
      calificacion: 5,
      etiquetas: ["CSS", "Frontend", "Web"],
      imagen:
        "https://i.ytimg.com/vi/24gNhTcy6pw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDZFUB3j81hPh5ZfjFcxDgYfYsSpQ",
    },
    JavaScript: {
      titulo: "Aprende JavaScript",
      calificacion: 4.5,
      etiquetas: ["JavaScript", "Frontend", "Web"],
      imagen:
        "https://i.ytimg.com/vi/bmGPv687toc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD-4STmpvPRQ7vRC2TTGQqOfD-BxA",
    },
    React: {
      titulo: "React desde cero",
      calificacion: 4.5,
      etiquetas: ["React", "Frontend", "Web"],
      imagen:
        "https://i.ytimg.com/vi/7iobxzd_2wY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvEbnFMppVjHlrtEAXWAnMnNz5uA",
    },
    Python: {
      titulo: "Python desde cero",
      calificacion: 4.5,
      etiquetas: ["Python", "Backend", "IA"],
      imagen:
        "https://i.ytimg.com/vi/Kp4Mvapo5kc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8nb-664lEO-DeuDcwwk3ObQWBpg",
    },
    Django: {
      titulo: "Django desde cero",
      calificacion: 4.5,
      etiquetas: ["Django", "Backend", "Web"],
      imagen:
        "https://i.ytimg.com/vi/y7P6ytatRYk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA59FeYg_1wz08Y1pikLBsg0XJ4zA",
    },
  };

  return (
    <div className="mx-auto">
      <Header />
      <div className="flex flex-col items-center md:flex-row justify-between w-3/5 mx-auto mt-10">
        <div className="flex gap-6">
          <p>
            <FontAwesomeIcon icon={faFilter} /> Todos los filtros
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowDownAZ} /> Ordenar por
          </p>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="border-2 border-gray-300 rounded-lg mt-4 md:mt-0 md:w-2/5 h-10 px-5 text-sm focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-8">
        {Object.values(cursos).map((curso) => {
          return (
            <Curso
              key={curso}
              imagen={curso.imagen}
              titulo={curso.titulo}
              calificacion={curso.calificacion}
              etiquetas={curso.etiquetas}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PrincipalCursos;
