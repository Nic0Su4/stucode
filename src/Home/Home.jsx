import HeroSection from "./Hero";
import Layout from "../Components/Layout";
import PrimeraSeccion from "./Primera-seccion";
import SegundaSeccion from "./Segunda-seccion";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection Navegacion={<Layout />} />
      <PrimeraSeccion />
      <SegundaSeccion />
    </div>
  );
};

export default Home;
