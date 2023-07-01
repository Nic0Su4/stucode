import {
  faArrowRightFromBracket,
  faMugHot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoursePage = () => {
  const rates = [
    { cups: 5, votaciones: 1234 },
    { cups: 4, votaciones: 120 },
    { cups: 3, votaciones: 135 },
    { cups: 2, votaciones: 1 },
    { cups: 1, votaciones: 0 },
  ];
  return (
    <div>
      {/* header */}
      <div className="flex flex-col gap-5 max-w-[800px] w-full mx-auto">
        <button className="self-start text-red-500 py-2 px-4 rounded-full shadow-lg flex gap-2 items-center">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Salir del curso
        </button>
        <div className="flex flex-row gap-8">
          <section className="w-1/2 flex flex-col gap-3">
            <img
              src="https://i.ytimg.com/vi/XqFR2lqBYPs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJihX_Oxu5bFA4emlycI7XOiP-Bw"
              alt=""
            />
            <button className="bg-red-500 text-white py-2 rounded-3xl">
              Ir al curso
            </button>
          </section>
          <section className="w-1/2 flex flex-col gap-2">
            <h2 className="text-blue-600 font-bold text-3xl">
              Aprende HTML y CSS - Curso Desde Cero
            </h2>
            <div className="text-2xl text-amber-800">
              {rates.map((rate) => (
                <section className="flex gap-1" key={rate.id}>
                  {Array(rate.cups)
                    .fill()
                    .map((_, index) => (
                      <FontAwesomeIcon icon={faMugHot} key={index} />
                    ))}
                  <p className="text-xl text-gray-600">{rate.votaciones}</p>
                </section>
              ))}
            </div>
            <ul className="flex flex-row flex-wrap gap-5">
              <li className="text-white px-5 py-1 bg-orange-500 rounded-full">
                HTML
              </li>
            </ul>
          </section>
        </div>
        <div className="w-1/2 flex flex-col">
          <section className="flex gap-5 items-center">
            <h3 className="text-gray-500 text-xl">Califica el curso:</h3>
            <FontAwesomeIcon
              className="text-amber-800 text-xl"
              icon={faMugHot}
            />
            <FontAwesomeIcon
              className="text-amber-800 text-xl"
              icon={faMugHot}
            />
            <FontAwesomeIcon
              className="text-amber-800 text-xl"
              icon={faMugHot}
            />
            <FontAwesomeIcon
              className="text-amber-800 text-xl"
              icon={faMugHot}
            />
            <FontAwesomeIcon
              className="text-amber-800 text-xl"
              icon={faMugHot}
            />
          </section>
          <section className="flex flex-row gap-3">
            <input
              type="text"
              placeholder={`Escribe tu comentario`}
              className="flex-1 border-none shadow-md px-3 py-2 rounded-full"
            />
            <button className="text-red-500 border-[1px] border-red-500 px-4 py-1 rounded-full flex gap-2 items-center">
              Enviar
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
