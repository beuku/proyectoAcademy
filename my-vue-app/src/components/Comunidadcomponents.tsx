import "../styless/Comunidad.css"
import AspectRatio from '@mui/joy/AspectRatio';
import FormularioComponents from "./FormularioComponents";
import { useEffect, useState } from 'react';
import { filtrarComentario } from './Moderacion';
import Header from  "../components/RealHeader"


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
        <body className="body-Comunidad">  
        
          <h1 className="Comunidad"> ¡Comunidad!</h1>
          <div>
            <div>
              {formularios.map((form, index) => (
                <div key={index} className="cajas">
                  <AspectRatio className="CAJA" sx={{ width: 1000 }}>
                    <img  className="fanarts"
                      src={`http://localhost:4000${form.image}`}
                      alt="Imagen subida"
                    />
                  </AspectRatio>
                  <h2 className="titulo-imagenn">{form.name}</h2>
                  <p className="descripcion">{form.comentario}</p>
                    <input
                      type="text"
                      className="comentario"
                      value={comentario}  
                      onChange={handleComentarioChange}  
                      placeholder="Escribe tu comentario..."
                    />
                </div>
              ))}
            </div>    
          </div>
        </body>
      </>
  )
}

export default Comunidadcomponents;
