import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "../styless/RegistrarStyles.css"

function RegitrarComponents() {
  return (

    <div>
        <Link to="/Registrar" className="buttonRegistrar"><Button variant="contained" className="stylboton">Crear un cuenta</Button></Link>
    </div>
  )
}

export default RegitrarComponents