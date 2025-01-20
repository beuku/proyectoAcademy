import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";
import "../styless/Sobrejuego.css"; 

function Sobrejuego() {
  return (
    
    <Box className="body-sobrejuego">
      <Typography variant="h4" className="margen1">
        ¡Sobre nuestro juego!
      </Typography>

      <Box className="url">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=-U8Hbs0f0Ek"
          controls
          height={600}
          width={940}
        />

      </Box>

      <Box className="padremargen">  <Box className="margen2">
        <Typography variant="h1" className="titulo-p">
          Modo de juego
        </Typography>
        <Typography variant="body1" className="TEXTO">
          Albion Online es un juego de fantasía MMORPG sandbox que tiene una economía manejada por los jugadores,
          un sistema de combate sin clases,
          e intensas batallas de PvP. Explora el vasto mundo lleno de peligros y oportunidades.
        </Typography>
      </Box>

      <Box className="margen2">
        <Typography variant="h1" className="titulo-p">
          Reglas de juego
        </Typography>
        <Typography variant="body1" className="TEXTO">
          Albion Online está diseñado para jugadores de 18 años o más. La expectativa es que el juego y el chat no serán un entorno limpio desde
          el punto de vista clínico, ya que se trata de un juego competitivo, a pesar de todo, sin embargo, no se tolerará la toxicidad extrema.
        </Typography>
      </Box>  
       
      </Box>
    </Box>
  );
}

export default Sobrejuego;
