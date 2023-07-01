import HeroSection from "./HeroSection";
import Layout from "../../components/Layout";
import PrimeraSeccion from "./Primera-seccion";
import SegundaSeccion from "./Segunda-seccion";
import { useState } from "react";

const Home = () => {
  const [popUp, setPopUp] = useState(false);
  console.log(popUp);
  const handleMenu = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="overflow-x-hidden">
      <HeroSection handleMenu={handleMenu} />
      {popUp && <Menu handleMenu={handleMenu} />}
      <PrimeraSeccion />
      <SegundaSeccion />
    </div>
  );
};

const Menu = ({ handleMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white  z-50 flex justify-center py-10">
      <div className="bg-white relative w-10/12 sm:w-8/12 rounded-2xl ">
        <div className="flex flex-col">
          <section className="mb-16 flex flex-row justify-between">
            <h1 className="text-2xl font-bold text-red-600  ">StuCode</h1>
            <button
              className="text-2xl font-bold text-red-600"
              onClick={handleMenu}
            >
              X
            </button>
          </section>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href=""
            className="border-b-2 pl-1 text-xl font-medium text-gray-500"
          >
            Inicio
          </a>
          <a
            href=""
            className="border-b-2 pl-1 text-xl font-medium text-gray-500"
          >
            Contacto
          </a>
          <a
            href=""
            className="border-b-2 pl-1 text-xl font-medium text-gray-500"
          >
            Comunidad
          </a>
          <a
            href=""
            className="border-b-2 pl-1 text-xl font-medium text-gray-500"
          >
            Cursos
          </a>
        </div>
        <div className="absolute w-full bottom-4 box-border flex mt-10 justify-between items-center">
          <button className="text-base font-bold text-red-600">
            Iniciar sesión
          </button>
          <button className="text-base font-bold text-red-600">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
