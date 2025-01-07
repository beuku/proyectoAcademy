import { Link } from "react-router-dom"
import "../styless/RegistrarStyles.css"

function RegitrarComponents() {
  return (

    <div className="des">
        <Link to="/Registrar" className="buttonRegistrar"><button className="stylboton">Crear un cuenta</button></Link>
    </div>
  )
}

export default RegitrarComponents