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
      <h2
        className="text-white text-center text-4xl font-medium pt-4"
      >Sueña, programa y conquista</h2>
      <h1
        className="text-white text-center text-6xl font-extrabold pt-4"
      >Sin límites ni barreras</h1>
      <p className="text-white mx-auto text-center w-3/5 p-4">Descubre una plataforma inclusiva, inspiradora y llena de oportunidades para alcanzar tus metas en el fascinante campo de la programación.</p>
      <a
        href=""
        className="text-red-600 mx-auto text-center text-xl font-medium px-8 py-3 bg-white rounded-xl mb-4 hover:bg-gray-300 hover:text-red-700 transition duration-300 ease-in-out"  
      >¡Comienza ya!</a>
    </header>
  )
}

export default Header