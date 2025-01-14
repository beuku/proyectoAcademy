import "../styless/DescargaStyles.css";
import ReviewSection from "../components/ReviewSectionComponents";

function Descargacomponents() {
  return (
    <body className='body-descarga'>

      <h1 className="titulo-D"> ¿Como Descargar? </h1>
      
      <div>
        <h2 className="opciones">Seleccione una de las opciones de descarga a continuación</h2>
      </div>

      <h2 className="Descarga">
        <a href="https://store.steampowered.com/?l=spanish" target="_blank">
          <h2>Steam</h2>
          <img src="src/assets/steam.jpg" width="250" alt="Steam" />
        </a>

        <a href="https://store.epicgames.com/es-ES/" target="_blank">
          <h2>Epicgame</h2>
          <img src="src/assets/epic.jpg" width="250" alt="Epic Games" />
        </a>

        <a href="https://www.nintendo.com/es-cl/store/games/" target="_blank">
          <h2>Nintendo</h2>
          <img src="src/assets/nintendo.jpg" width="250" alt="Nintendo" />
        </a>
      </h2>

      <div className="indicar">
        <h2>En Steam: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado agregue al carrito,
          a continuación busque y presione la opción ver el carrito y luego continuar con el pago y siga las
          indicaciones que le aparecerán</h2>
      </div>

      <div className="indicar">
        <h2>En Epicgame: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado, presione
          comprar ahora y siga las indicaciones que le aparecerán</h2>
      </div>

      <div className="indicar">
        <h2>En Nintendo: busque el juego de su gusto y precionelo, ya dentro del juego seleccionado,
          presione descarga directa, coloque la contraseña de su cuenta y siga las indicaciones</h2>
      </div>

      <div className="review-section">
        <h2 className="h2R">Reviews de Descargas</h2>
        <ReviewSection />
      </div>

    </body>
  );
}

export default Descargacomponents;
