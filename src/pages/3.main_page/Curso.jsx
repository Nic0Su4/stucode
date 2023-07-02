const Curso = ({imagen, titulo, calificacion, etiquetas}) => {
  return (
    <div className="mx-auto mt-4">
      <img className="w-[250px]" src={imagen} alt="Imagen del curso" />
      <h1 style={{color: '#2F58CD'}} className="font-semibold text-xl">{titulo}</h1>
      <p className="mb-2">{calificacion}</p>
      {etiquetas.map(etiqueta => <p key={etiqueta} className="inline mr-1 px-2 py-1 bg-red-700 text-white rounded-md">{etiqueta}</p> )}
    </div>
  )
}

export default Curso