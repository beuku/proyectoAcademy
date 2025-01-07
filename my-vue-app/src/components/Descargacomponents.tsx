import { Link } from "react-router-dom";
import "../styless/DescargaStyles.css"

function Descargacomponents() {
    return (

      <header className="descarga">   
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

  
      <body className='body-descarga'>

        <h1 className="titulo-D"> ¿Como descargar? </h1>



        <h2 className="Descarga">
        <a href="https://store.steampowered.com/?l=spanish"target="_blank">
        <img src="src/assets/steam.jpg"  width="250"></img>
        </a>




        <a href="https://store.epicgames.com/es-ES/"target="_blank">
        <img src="src/assets/epic.jpg" width="250"></img>
        </a>


        <a href="https://www.nintendo.com/es-cl/store/games/"target="_blank">
            <img  src="src/assets/nintendo.jpg" width="250"></img>
        </a>

    </h2>

  
      </body>

    </header>
  
    )
  }
  
  export default Descargacomponents;