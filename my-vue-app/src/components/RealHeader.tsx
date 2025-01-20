import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";
import IniSesionComponents from "../components/IniSesionComponents";
import { Box } from "@mui/material";


function Header() {
  return (
    <>
        <Box className="nav">
            <div className="nav">
            <img src="src/assets/icono10.png" alt="" width="80px"></img>
                <li className="li">
                    <Link className="link" to="/">Inicio</Link>
                </li>

                <li className="li">
                    <Link className="link" to="/SobreEljuego">Sobre el juego</Link>
                </li>

                <li className="li">
                    <Link className="link" to="/DevLog">DevLog</Link>
                </li>

                <li className="li">
                    <Link className="link" to="/Comunidad">Comunidad</Link>
                </li>

                <li className="li">
                    <Link className="link" to="/Descarga">Descarga</Link>     
                </li>

                <li className="li">
                    <Link className="link" to="/AvisoLegal">Aviso legal</Link>
                </li>
            <IniSesionComponents />
            </div>
            </Box>
           
    </>
  )
}

export default Header