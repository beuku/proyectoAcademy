import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";

function HeaderComponemts() {
  return (
    <>
        <nav className="nav">
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
    

        </nav>
        <header className="header">
            <h1 className="title">ShaqVeyter</h1>
        </header>
    </>
  )
}

export default HeaderComponemts