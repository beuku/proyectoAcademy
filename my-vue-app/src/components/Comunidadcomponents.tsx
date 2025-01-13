import { Link } from "react-router-dom";
import "../styless/Comunidad.css"
import AspectRatio from '@mui/joy/AspectRatio';

import FormularioComponents from "./FormularioComponents";
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
    <header>    
      <div className="com">
        <img src="src/assets/icono10.png" alt="" width="80px"></img>
          <li className="li">
              <Link className="link" to="/">Inicio</Link>
          </li>
        <li className="li">
            <Link className="link" to="/SobreEljuego">Sobre el juego</Link>
        </li>
          <li className="li">
              <Link className="link" to="/DevLog">DevLog</Link>
          </li>
        <li className="li">
            <Link className="link" to="/Comunidad">Comunidad</Link>
        </li>
          <li className="li">
              <Link className="link" to="/Descarga">Descarga</Link>
          </li>

          <FormularioComponents />
        <li className="li">
            <Link className="link" to="/AvisoLegal">Aviso legal</Link>
        </li>
      </div>
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
    </header>
  )
}

export default Comunidadcomponents;
