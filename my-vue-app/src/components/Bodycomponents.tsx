import { Box, Typography } from "@mui/material";
import "../styless/Bodystyles.css";

export default function Bodycomponents() {
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Typography variant="h4" className="N">
        ¡Nuestros enlaces de descarga!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
        <a href="https://store.steampowered.com/?l=spanish" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/steam.jpg" width="100" alt="Steam" />
        </a>
        <a href="https://store.epicgames.com/es-ES/" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/epic.jpg" width="100" alt="Epic Games" />
        </a>
        <a href="https://www.nintendo.com/es-cl/store/games/" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/nintendo.jpg" width="100" alt="Nintendo" />
        </a>
      </Box>
    </Box>
  );
}
