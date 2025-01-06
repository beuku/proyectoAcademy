import "../styless/DevlogStyles.css"
import { Link } from "react-router-dom";

function Devlogcomponents() {
  return (

  <header>    
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

      <img src="src/assets/icono10.png" alt="" width="80px"></img>
      
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






      <body className='body-Devlog'>   


      <h1 className="desarrolladores-">
        !Desarrolladores!
      </h1>
        
        
      <h2 className="h2-NE">Nuestro equipo</h2> 
      <p className="-somos">
        Somos un equipo de profesionales con amplia experiencia 
        en el sector del desarrollo de software. Estamos comprometidos a brindar 
        el mejor servicio a nuestros clientes y garantizar su satisfacción.
      </p>

    </body>
  </header>




  )
}
export default Devlogcomponents;
