import "../styless/DescargaStyles.css";
import ReviewSection from "../components/ReviewSectionComponents";

interface DescargaOptionProps {
  title: string;
  imgSrc: string;
  link: string;
  alt: string;
}

const DescargaOption = ({ title, imgSrc, link, alt }: DescargaOptionProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <h2>{title}</h2>
    <img src={imgSrc} width="250" alt={alt} />
  </a>
);

const Instrucciones = ({ texto }: { texto: string }) => (
  <div className="indicar">
    <h2>{texto}</h2>
  </div>
);

function Descargacomponents() {
  return (
    <body className="body-descarga">
      <h1 className="titulo-D"> ¿Como Descargar? </h1>
      <h2 className="opciones">Seleccione una de las opciones de descarga a continuación</h2>
      
      <h2 className="Descarga">
        <DescargaOption
          title="Steam"
          imgSrc="src/assets/steam.jpg"
          link="https://store.steampowered.com/?l=spanish"
          alt="Steam"
        />
        <DescargaOption
          title="Epicgame"
          imgSrc="src/assets/epic.jpg"
          link="https://store.epicgames.com/es-ES/"
          alt="Epic Games"
        />
        <DescargaOption
          title="Nintendo"
          imgSrc="src/assets/nintendo.jpg"
          link="https://www.nintendo.com/es-cl/store/games/"
          alt="Nintendo"
        />
      </h2>

      <Instrucciones
        texto="En Steam: busque el juego de su gusto y presione, ya dentro del juego seleccionado agregue al carrito, a continuación busque y presione la opción ver el carrito y luego continuar con el pago y siga las indicaciones que le aparecerán"
      />
      <Instrucciones
        texto="En Epicgame: busque el juego de su gusto y presione, ya dentro del juego seleccionado, presione comprar ahora y siga las indicaciones que le aparecerán"
      />
      <Instrucciones
        texto="En Nintendo: busque el juego de su gusto y presione, ya dentro del juego seleccionado, presione descarga directa, coloque la contraseña de su cuenta y siga las indicaciones"
      />

      <div className="review-section">
        <h2 className="h2R">Reviews de Descargas</h2>
        <ReviewSection />
      </div>
    </body>
  );
}

export default Descargacomponents;
