import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";
import IniSesionComponents from "./IniSesionComponents";


function HeaderComponemts() {
  return (
    <>
        <nav className="nav">
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
                <div className="reg">
           
                </div>
            
            </div>
            <IniSesionComponents />
        </nav>
        <header className="header">
            <img className="baner" src="./src/assets/Cap.png" alt="banner" />
        </header>
        
        
       
    </>
  )
}

export default HeaderComponemts