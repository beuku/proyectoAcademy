
import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";
import RegitrarComponents from "./RegitrarComponents";
import IniSesion from "../pages/IniSesion";
import IniSesionComponents from "./IniSesionComponents";

function HeaderComponemts() {
  return (
    <>
        <nav className="nav">
        <img src="src/assets/icono10.png" alt="" width="80px"></img>
            <div className="nav">
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
            </div>
            <IniSesionComponents />
        </nav>
        <header className="header">
            <img className="baner" src="./src/assets/Cap.png" alt="banner" />
        </header>
        
        <h2 className="bienvenida">
                
                Bienvenido a ShaVeyter, el lugar definitivo para vivir la 
                aventura de tu vida.
                Sumergete en un mundo lleno de accion, desafios y emocionantes 
                sorpresas. Ya seas un principiante o un experto, aqui 
                encontraras todo lo que necesitas para mejorar tu experiencia 
                y dominar el juego. Unete a la comunidad, compite con jugadores 
                de todo el mundo y descubre nuevos niveles de diversion en cada 
                partida. ¡Tu aventura comienza ahora por ShaqVeyter!
    
                </h2>
    </>
  )
}

export default HeaderComponemts