import { Link } from "react-router-dom";
import "../styless/Comunidad.css"

function Comunidadcomponents() {
    return (
        <header>    
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
      </div>
    
            <body className='body-Comunidad'>
             

                <h1 className="Comunidad"> ¡Comunidad!</h1>


            </body>
        </header>
  )
}
  export default Comunidadcomponents;