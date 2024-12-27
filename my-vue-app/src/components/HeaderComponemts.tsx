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
            <img className="baner" src="./src/assets/Shaq.png" alt="banner" />
            <h1 className="title">Bienvenido a ShaqVeyter</h1>
            <p>
             <h4> Esta es la pagina oficial del juego el cual esta aun en desarrollo, aqui podras encontrar todo acerca de como vamos avanzando en el desarrollo de la historia y los personajes. </h4>
            </p>

        </header>
    </>
  )
}

export default HeaderComponemts