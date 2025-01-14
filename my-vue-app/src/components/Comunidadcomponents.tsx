import "../styless/Comunidad.css"
import AspectRatio from '@mui/joy/AspectRatio';
import { useState } from 'react';
import { filtrarComentario } from './Moderacion';


function Comunidadcomponents() {
  const [comentario, setComentario] = useState("");
  const handleComentarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoComentario = e.target.value;  
   
    const comentarioFiltrado = filtrarComentario(nuevoComentario);

   
    setComentario(comentarioFiltrado);
    };

    return (

      <body className="body-Comunidad">  
       
        <h1 className="Comunidad"> ¡Comunidad!</h1>

        <div className="cajas"> 
            <AspectRatio className="CAJA" sx={{ width: 1000 }}>
                <p className="imagenes"></p>
            </AspectRatio> 
            <h2 className="titulo-imagenn">Titulo</h2>
            <p className="descripcion"> Impresionante captura de un 
                dinosaurio en su hábitat natural. Su presencia majestuosa 
                y poderosa resalta mientras se enfrenta al vasto entorno 
                de ARK
            </p>
            <input
                type="text"
                className="comentario"
                value={comentario}  
                onChange={handleComentarioChange}  
                placeholder="Escribe tu comentario..."
            />
          </div>

          <div className="cajas"> 
            <AspectRatio className="CAJA" sx={{ width: 1000 }}>
                <p className="imagenes"></p>
            </AspectRatio> 
            <h2 className="titulo-imagenn">Titulo</h2>
            <p className="descripcion"> Impresionante captura de un 
                dinosaurio en su hábitat natural. Su presencia majestuosa 
                y poderosa resalta mientras se enfrenta al vasto entorno 
                de ARK
            </p>
              <input
                type="text"
                className="comentario"
                value={comentario}  
                onChange={handleComentarioChange}  
                placeholder="Escribe tu comentario..."
            />
          </div>

      </body>
  )
}

export default Comunidadcomponents;
