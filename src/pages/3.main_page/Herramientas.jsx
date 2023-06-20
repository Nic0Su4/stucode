import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faArrowUp91 } from "@fortawesome/free-solid-svg-icons"

const Herramientas = () => {
  return (
    <div className="w-full ">
        <button>
            <FontAwesomeIcon icon={faFilter}/>
            <p>Todos los filtros</p>
        </button>
        <button>
            <FontAwesomeIcon icon={faArrowUp91}/>
            <p>Ordenar Por</p>
        </button>
        <input type="text" placeholder=""/>
    </div>
  )
}

export default Herramientas