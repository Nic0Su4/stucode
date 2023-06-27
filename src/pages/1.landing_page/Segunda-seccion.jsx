import React from "react";
import "./Segunda.css";
import Imagen from "../../assets/img/Grupo-segunda-seccion.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faQuestion,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
const SegundaSeccion = () => {
  return (
    <div className="bg-red-700">
      <div class="custom-shape-divider-top-1686781453">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-1200 max-w-full mx-auto">
        <div className="flex justify-end">
          <h2 className="w-full md:w-1/2 text-center md:text-right text-[6vw] md:text-5xl text-white p-3">
            ¡Una <strong>comunidad</strong> activa y{" "}
            <strong>colaborativa</strong>!
          </h2>
        </div>
        <div className="flex md:flex-row flex-col-reverse p-10 gap-5">
          <section className="flex-1">
            <img src={Imagen} alt="Imagen grupo colaborativo" />
          </section>
          <ul className="flex-1 flex flex-col justify-center gap-5">
            <Valores icon={faBrain} name={"Comparte tus conocimientos"} />
            <Valores icon={faQuestion} name={"Resuelve tus dudas"} />
            <Valores
              icon={faUserGroup}
              name={"Colabora en diversos proyectos"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const Valores = ({ name, icon }) => {
  return (
    <li className=" flex gap-3 items-center text-white border-2 cursor-pointer bg-none hover:bg-white hover:text-red-800 p-3 md:p-4 rounded-2xl">
      <FontAwesomeIcon
        className="w-3 sm:w-5 text-[3.4vw] md:text-xl"
        icon={icon}
      />
      <p className="text-[3.4vw] md:text-xl">{name}</p>
    </li>
  );
};
export default SegundaSeccion;
