import "../styless/Bodystyles.css";

export default function Bodycomponents() {
  return (
    <body>
      <h1 className="N"> ¡Nuestros enlaces de descarga! </h1>

      <h2>
        <a href="https://store.steampowered.com/?l=spanish" target="_blank">
          <img src="src/assets/steam.jpg" width="100" alt="Steam" />
        </a>

        <a href="https://store.epicgames.com/es-ES/" target="_blank">
          <img src="src/assets/epic.jpg" width="100" alt="Epic Games" />
        </a>

        <a href="https://www.nintendo.com/es-cl/store/games/" target="_blank">
          <img src="src/assets/nintendo.jpg" width="100" alt="Nintendo" />
        </a>
      </h2>
    </body>
  );
}
