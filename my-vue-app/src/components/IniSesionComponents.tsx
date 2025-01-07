import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "../styless/IniSesion.css"

function IniSesionComponents() {
  return (
    <div>
        <Link to="/IniSesion" className="buttonRegistrar"><Button variant="contained" className="stylboton">Iniciar Sesion</Button></Link>
    </div>
  )
}

export default IniSesionComponents