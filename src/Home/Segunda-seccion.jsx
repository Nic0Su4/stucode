import React from "react";
import "./Segunda.css";
import Imagen from "../img/Grupo-segunda-seccion.png";
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
        <div className="w-1/2 float-right">
          <h2 className=" text-right text-5xl text-white">
            ¡Una comunidad activa y colaborativa!
          </h2>
        </div>
        <div className="flex">
          <section className="flex-1">
            <img src={Imagen} alt="Imagen grupo colaborativo" />
          </section>
          <section className="flex-1">hola</section>
        </div>
      </div>
    </div>
  );
};

export default SegundaSeccion;
