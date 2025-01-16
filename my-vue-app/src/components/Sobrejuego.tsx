import "../styless/Sobrejuego.css"
import ReactPlayer from "react-player";

function Sobrejuego() {
  return (

    <body className="body-sobrejuego">
      <h1 className="margen1"> ¡Sobre nuestro juego!</h1>
      <div className="url">
        <ReactPlayer url="https://www.youtube.com/watch?v=-U8Hbs0f0Ek"
          controls
          height={600}
          width={940}    
        />
      </div>

      <h4> 
        <p className="margen2"> <h1 className="titulo-p">Modo de juego</h1>
            <p className="TEXTO">Albion Online es un juego de fantasía MMORPG 
            sandbox que tiene una economía manejada por los jugadores, un 
            sistema de combate sin clases, e intensas batallas de PvP. Explora 
            el vasto mundo lleno de peligros y oportunidades.
            </p>
        </p>

        <p className="margen2"> <h1 className="titulo-p">Reglas de juego</h1>
            <p className="TEXTO">Albion Online está diseñado para jugadores de 18 
              años o más. La expectativa es que el juego y el chat no serán un 
              entorno limpio desde el punto de vista clínico, ya que se trata de un 
              juego competitivo, a pesar de todo, sin embargo, no se tolerará la 
              toxicidad extrema. 

            </p>
        </p>
      </h4>
    </body>

  )
}

export default Sobrejuego;