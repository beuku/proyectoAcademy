import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "../styless/IniciarSesion.css"

function IniciarSesionComponets() {
  return (
    <div>
         <Link to="/IniciarSesion" className="buttonRegistrar"><Button variant="contained" className="stylboton">Iniciar Sesion</Button></Link>
    </div>

  )
}

export default IniciarSesionComponets