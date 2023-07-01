import Hero from "../../assets/img/Hero.png";
import Navegacion from "../../components/Navegacion";

const HeroSection = ({ handleMenu }) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(61.44% 64.31% at 55% 97.85%, #DC2626 0%, #7F1D1D 100%)",
      }}
      className="flex flex-col justify-center items-center"
    >
      <Navegacion handleMenu={handleMenu} />
      <img
        className="w-10/12 md:w-2/3 mx-auto my-8 "
        src={Hero}
        alt="Imagen principal de la página de inicio de StuCode"
      />
      <h2 className=" text-white text-center md:text-3xl text-[3.4vw] font-medium pt-1 md:pt-4">
        Sueña, programa y conquista
      </h2>
      <h1 className="text-white text-center text-[7vw] md:text-6xl font-extrabold pt-2 md:pt-4">
        Sin límites ni barreras
      </h1>
      <p className="text-white mx-auto text-center md:text-3xl text-[3.2vw] w-4/5 md:w-3/5 p-2 md:p-4">
        Descubre una plataforma inclusiva, inspiradora y llena de oportunidades
        para alcanzar tus metas en el fascinante campo de la programación.
      </p>
      <a
        href=""
        className="text-red-600 mx-auto text-center text-xs md:text-xl font-medium px-8 py-3 bg-white rounded-xl mb-4 hover:bg-gray-300 hover:text-red-700 transition duration-300 ease-in-out"
      >
        ¡Comienza ya!
      </a>
    </div>
  );
};

export default HeroSection;
