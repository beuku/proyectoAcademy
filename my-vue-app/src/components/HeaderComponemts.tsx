
import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";
import RegitrarComponents from "./RegitrarComponents";

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
            <RegitrarComponents />
        </nav>
        <header className="header"><h1 className="title">Bienvenido</h1>
            <img className="baner" src="./src/assets/Cap.png" alt="banner" />
          
        </header>
    </>
  )
}

export default HeaderComponemts