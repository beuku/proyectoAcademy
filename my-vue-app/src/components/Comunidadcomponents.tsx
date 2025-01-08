import { Link } from "react-router-dom";
import "../styless/Comunidad.css"
import AspectRatio from '@mui/joy/AspectRatio';


function Comunidadcomponents() {
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
    
          <li className="li">
              <Link className="link" to="/AvisoLegal">Aviso legal</Link>
          </li>
      </div><body className='body-Devlog'>   
  <p className="somos">
  En este espacio se irán cargando todas las cosas del juego areh.
  </p>

<div className="cajas"> 

<AspectRatio className="CAJA" sx={{ width: 1000 }}>
  <p className="imagenes"></p>
</AspectRatio> 
<h2 className="titulo-imagenn">update</h2>
  <p className="descripcion"> texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto
  </p>

  </div>
  <div className="cajas"> 

<AspectRatio className="CAJA" sx={{ width: 1000 }}>
  <p className="imagenes"></p>
</AspectRatio> 
<h2 className="titulo-imagenn">update</h2>
  <p className="descripcion"> texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto texto texto texto texto
  texto texto texto texto</p>
      <input type="text" label="Comenta we" className="comentario"/>
  </div>

</body>
        </header>
  )
}
  export default Comunidadcomponents;