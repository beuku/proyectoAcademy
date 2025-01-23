import "../styless/Comunidad.css";
import AspectRatio from '@mui/joy/AspectRatio';
import FormularioComponents from "./FormularioComponents";
import { useEffect, useState } from 'react';
import { filtrarComentario } from './Moderacion';
import Header from "../components/RealHeader";
import { Box, Typography, TextField } from '@mui/material';

function Comunidadcomponents() {
  const [comentario, setComentario] = useState("");
  const [formularios, setFormularios] = useState<any[]>([]);

  const handleComentarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoComentario = e.target.value;  
    const comentarioFiltrado = filtrarComentario(nuevoComentario);
    setComentario(comentarioFiltrado);
  };

  useEffect(() => {
    const fetchFormularios = async () => {
      try {
        const response = await fetch("http://localhost:4000/Comunidad");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setFormularios(result);
      } catch (error) {
        console.error("Error al obtener los formularios:", error);
      }
    };

    fetchFormularios(); 
  }, []);

  return (
    <>
      <Header />
      <FormularioComponents />
      <Box className="body-Comunidad">  
        <Typography variant="h2" className="Comunidad">¡Comunidad!</Typography>
        <Box>
          {formularios.map((form, index) => (
            <Box key={index} className="cajas">
              <AspectRatio className="CAJA" sx={{ width: 1000 }}>
                <img
                  className="fanarts"
                  src={`http://localhost:4000${form.image}`}
                  alt="Imagen subida"
                />
              </AspectRatio>
              <Typography variant="h2" className="titulo-imagenn">{form.name}</Typography>
              <Typography className="descripcion">{form.comentario}</Typography>
              <TextField
                className="comentario"
                value={comentario}  
                onChange={handleComentarioChange}  
                placeholder="Escribe tu comentario..."
                variant="outlined"
                fullWidth
              />
            </Box>
          ))}
        </Box>    
      </Box>
    </>
  );
}

export default Comunidadcomponents;
