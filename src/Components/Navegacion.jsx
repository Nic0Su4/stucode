import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navegacion = ({ isLogged, setIsLogged }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-10/12 pt-4 pb-8 mx-auto text-white">
      {isLogged ?
        <nav className="flex flex-col gap-6 md:flex-row justify-between items-center h-full">
          <a
            href="/"
          >{"StuCode (>'-'<)"}</a>

          <button
              className="block md:hidden ml-4 text-white"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
          </button>

          <ul className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-6`}>
            <li><a href="">Inicio</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Comunidad</a></li>
            <li><a href="">Cursos</a></li>
          </ul>

          <ul className="flex flex-col md:flex-row">
            <li><button onClick={() => {
                setIsLogged(false)
              }
            }>Cerrar sesión</button></li>
          </ul>
        </nav>
        :
        <nav className="flex flex-col gap-6 md:flex-row justify-between items-center align-middle h-full">
          <p
            className="hover:cursor-pointer"
          >{"StuCode (>'-'<)"}</p>

          <button
              className="block md:hidden ml-4 text-white"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
          </button>

          <ul className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-6`}>
            <li><a href="">Inicio</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Comunidad</a></li>
            <li><a href="">Cursos</a></li>
          </ul>

          <ul className="flex flex-col md:flex-row gap-6">
            <li><button onClick={() => {
                setIsLogged(true)
              }
            }>Iniciar sesión</button></li>
            <li><button onClick={() => {
                setIsLogged(true)
              }
            }>Registrarse</button></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default Navegacion