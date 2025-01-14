import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "../styless/IniSesion.css"

function IniSesionComponents() {
  return (
    <div>
        <Link to="/IniSesion" className="buttonIniciar"><Button className="stylboton" variant="contained">Iniciar Sesion</Button></Link>
    </div>
  )
}

export default IniSesionComponents