import React from "react";
import Imagen from "../../assets/img/Tecnologias-primera-seccion.png";
const PrimeraSeccion = () => {
  return (
    <div className="max-w-full w-1200 mx-auto p-8">
      <h2 className="text-center text-[6vw]  md:text-5xl text-gray-700 my-5   md:my-16">
        <span className="font-extrabold">Todo</span> en un solo{" "}
        <span className="font-extrabold">lugar</span>
        <br></br>
        <span className="font-extrabold">¡No pierdas</span> más{" "}
        <span className="font-extrabold">tiempo!</span>
      </h2>
      <div className="flex md:flex-row flex-col gap-2 md:gap-10">
        <section className="flex-1 flex flex-col gap-2 md:gap-12 justify-center">
          <p className="text-[3.4vw] md:text-2xl text-gray-700">
            Podrás tener <span className="font-bold">acceso</span> a distintos{" "}
            <span className="font-bold">cursos de programación gratuitos</span>{" "}
            con seleccionados especialmente para ti
          </p>
          <p className="text-[3.4vw] md:text-2xl text-gray-700">
            Ahorrando tiempo y teniendo acceso de manera sencilla a recursos de
            alta calidad, para{" "}
            <span className="font-bold">aprender, mejorar y potenciar</span> tus
            habilidades en programación.
          </p>
        </section>
        <section className="flex-1">
          <img src={Imagen} alt="" />
        </section>
      </div>
    </div>
  );
};

export default PrimeraSeccion;
