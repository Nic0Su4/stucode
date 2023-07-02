import Hero from "../../assets/img/Hero.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-10/12 mx-auto flex flex-row justify-between items-center">
      <Link
        to="/"
        className="text-red-700 font-semibold">{"StuCode (>'-'<)"}</Link>
      
      <Link
        to="/perfil"
        className="mt-2 text-white text-center
                    font-medium px-8 py-1 bg-red-700 rounded-2xl mb-4
                    hover:bg-red-800 transition duration-300 ease-in-out"
      >
        Ver perfil
      </Link>
    </header>
  );
};

export default Header;
