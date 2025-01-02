import "../styless/RegistrarStyles.css"
import "../styless/HeaderStyless.css"
import { Input } from "@mui/material"
import RegitrarComponents from "../components/RegitrarComponents"
import { Link } from "react-router-dom"




function Registrar() {
 
  return (
    <>
    
        <li>
            <Link className="link" to="/">Inicio</Link>
        </li>
        <RegitrarComponents />
        <div className="formulario">
            <h4>Datos de usuario</h4>
            <Input type="text" name="name" id="name" placeholder="Ingrese un nombre" className="input"/>
            <Input type="email" name="email" id="email" placeholder="Ingrese su correo" className="input"/>
            <Input type="password" name="password" id="password" placeholder="Ingrese una contraseña" className="input"/>
            <div>
                <Input type="submit" value="Registrar" className="boton"/>
            </div>
        </div>
        
       
    </>
  )
}

export default Registrar