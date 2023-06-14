

const Navegacion = ({ isLogged, setIsLogged }) => {
  return (
    <div className="w-10/12 pt-4 pb-8 mx-auto text-white">
      {isLogged ?
        <nav className="flex flex-col gap-6 md:flex-row justify-between items-center h-full">
          <a
            href="/"
          >{"StuCode (>'-'<)"}</a>

          <ul className="flex flex-col md:flex-row gap-6">
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

          <ul className="flex flex-col md:flex-row gap-6">
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