import Hero from "../img/Hero.png"
const Header = () => {
  return (
    <header
      className="flex flex-col justify-center items-center"
    >
      <img
        className="w-2/3 mx-auto"
        src={Hero}
        alt="Imagen principal de la página de inicio de StuCode" 
      />
      <a
        href=""
        className="text-white mx-auto text-center text-xl font-medium px-8 py-3 bg-red-700 rounded-xl mb-4 hover:bg-red-800 hover:text-red-700 transition duration-300 ease-in-out" 
      >Ver perfil</a>
    </header>
  )
}

export default Header