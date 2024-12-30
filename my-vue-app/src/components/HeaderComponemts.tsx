import "../styless/HeaderStyless.css"
import { Link } from "react-router-dom";

function HeaderComponemts() {
  return (
    <>
        <nav className="nav">

        <img src="src/assets/icono10.png" alt=""></img>
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
            <img className="baner" src="./src/assets/Shaq(2).png" alt="banner" />
            <h1 className="title">Bienvenido a ShaqVeyter</h1>
        <p>
            <h4> 
            albion online es un mmorpg no lineal en el 
            que escribes tu propia historia sin limitarte a
            seguir un camino prefijado, explora un amplio
            mundo abierto con cinco biomas unicos, todo cuant
            o hagas tendra su repercusíon en el mundo, con su 
            economia orientada al jugador de albion los jugadores
            crean practicamente todo el equipo a partir de los
            recursos que consiguen, el equipo que llevas define 
            quien eres, cambia de arma y armadura para pasar de
            caballero a mago o juego como una mezcla de ambas 
            clases, aventurate en el mundo abierto y haz frente
            a los habitantes y las criaturas de albion, inicia
            expediciones o adentrate en mazmorras en las que
            encontraras enemigos aun mas dificiles, enfrentate
            a otros jugadores en encuentros en el mundo abierto, 
            lucha por los territorios o por ciudades enteras en 
            batallas tacticas, relajate en tu isla privada donde 
            podras construir un hogar, cultivar cosechas, criar 
            animales, unete a un gremio, todo es mejor cuando se 
            trabaja en grupo  adentrate 
            ya en el mundo de albion y escribe tu propia historia.

            </h4>
        </p>

        </header>
    </>
  )
}

export default HeaderComponemts