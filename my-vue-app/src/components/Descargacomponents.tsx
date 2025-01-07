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
          <div>
            <h2 className="opciones">Seleccione una de las opciones de descarga a continuacion</h2>
          </div>
        <h2 className="Descarga">
          <a href="https://store.steampowered.com/?l=spanish"target="_blank">
          <h2>Steam</h2>
            <img src="src/assets/steam.jpg"  width="250"></img>
          </a>

          <a href="https://store.epicgames.com/es-ES/"target="_blank">
          <h2>Epicgame</h2>
            <img src="src/assets/epic.jpg" width="250"></img>
          </a>

          <a href="https://www.nintendo.com/es-cl/store/games/"target="_blank">
          <h2>Nintendo</h2>
            <img  src="src/assets/nintendo.jpg" width="250"></img>
          </a>
        </h2>
        <div className="indicar">
        <h2>En Steam: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado agregue al carrito,
          a continuacion busque y precione la opcion ver el carrito y luego continuar con el pago y sigua las
          indicaciones que le apareceran</h2>
          </div>
          <div className="indicar">
          <h2>En Epicgame: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado, precione
            comprar ahora y sigua las indicaciones que le apareceran</h2>
            </div>
            <div className="indicar">
            <h2>En Nintendo: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado,
              precione descarga directa, coloque la contraseña de su cuenta y sigua las indicaciones</h2>
              </div>
    </body>
  </header>

  )
}
        </a>

        
    </h2>

  
      </body>

    </header>
  
    )
  }
  
  export default Descargacomponents;