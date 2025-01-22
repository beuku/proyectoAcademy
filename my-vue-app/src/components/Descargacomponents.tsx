import "../styless/DescargaStyles.css";
import ReviewSection from "../components/ReviewSectionComponents";
import { Box, Typography } from '@mui/material';

interface DescargaOptionProps {
  title: string;
  imgSrc: string;
  link: string;
  alt: string;
}

const DescargaOption = ({ title, imgSrc, link, alt }: DescargaOptionProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Typography variant="h2" className="opciones">
      {title}
    </Typography>
    <img src={imgSrc} width="200" alt={alt} />
  </a>
);

const Instrucciones = ({ texto }: { texto: string }) => (
  <div className="indicar">
    <Typography variant="h2">{texto}</Typography>
  </div>
);

function Descargacomponents() {
  return (
    <Box  className="body-descarga">
      <Typography variant="h4" className="titulo-D">
        ¿Como Descargar?
      </Typography>
      <Typography variant="h3"className="opciones">
        Seleccione una de las opciones de descarga presente a continuación
      </Typography>
      
      <Box  className="Descarga">
        <DescargaOption
          title=""
          imgSrc="src/assets/steam.jpg"
          link="https://store.steampowered.com/?l=spanish"
          alt=""
        />
        <DescargaOption
          title=""
          imgSrc="src/assets/epic.jpg"
          link="https://store.epicgames.com/es-ES/"
          alt="Epic Games"
        />
        <DescargaOption
          title=""
          imgSrc="src/assets/nintendo.jpg"
          link="https://www.nintendo.com/es-cl/store/games/"
          alt="Nintendo"
        />
      </Box >

      <Instrucciones 
        texto="En Steam: busque el juego de su gusto y presione, ya dentro del juego seleccionado agregue al carrito, a continuación busque y presione la opción ver el carrito y luego continuar con el pago y siga las indicaciones que le aparecerán"
      />
      <Instrucciones
        texto="En Epicgame: busque el juego de su gusto y presione, ya dentro del juego seleccionado, presione comprar ahora y siga las indicaciones que le aparecerán"
      />
      <Instrucciones
        texto="En Nintendo: busque el juego de su gusto y presione, ya dentro del juego seleccionado, presione descarga directa, coloque la contraseña de su cuenta y siga las indicaciones"
      />

      <Box className="review-section">
        <Typography variant="h2"  className="h2R">
          Reviews de Descargas
        </Typography>
        <ReviewSection />
      </Box>
    </Box>
  );
}

export default Descargacomponents;
