import "../styless/DevlogStyles.css"
import { Link } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';


function Devlogcomponents() {
  return (

  <header>    
    <div className="nav">
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
  </div>






      <body className='body-Devlog'>   
 


  


      <h1 className="desarrolladores-">
        !Desarrolladores!
      </h1>
        
        
      
        <h3 className="-somos">
        Apartado de versiones del juego, Donde los usuarios 
        podran visualizar y acceder a las últimas correcciones 
        implementadas.
        </h3>

      <div className="BOX"> 

      <AspectRatio className="CAJA" sx={{ width: 550 }}>
        <p className="imagen-DEV"></p>
      </AspectRatio> 
      <h2 className="titulo-imagenn">Actualizacion 1.4</h2>
      <p className="descr">
      Hemos lanzado una nueva actualización en nuestra página
      web, enfocada en mejorar la experiencia de usuario y optimizar 
      las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar 
      de un sistema de comentarios más eficiente en la sección de comunidad, 
      con moderación automática para evitar spam y promover un ambiente seguro.
      </p>

        </div>

      <div className="BOX"> 
      <AspectRatio className="CAJA" sx={{ width: 550 }}>
        <p className="imagen-DEV"></p>
      </AspectRatio> 
      <h2 className="titulo-imagenn">Actualizacion1.3</h2>
      <p className="descr">
      Hemos lanzado una nueva actualización en nuestra página
      web, enfocada en mejorar la experiencia de usuario y optimizar 
      las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar 
      de un sistema de comentarios más eficiente en la sección de comunidad, 
      con moderación automática para evitar spam y promover un ambiente seguro.
      </p>
        </div>
          <div className="BOX"> 




      <AspectRatio className="CAJA" sx={{ width: 550 }}>
        <p className="imagen-DEV"></p>
      </AspectRatio> 
      <h2 className="titulo-imagenn">Actualizacion 1.2</h2>
      <p className="descr">
      Hemos lanzado una nueva actualización en nuestra página
      web, enfocada en mejorar la experiencia de usuario y optimizar 
      las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar 
      de un sistema de comentarios más eficiente en la sección de comunidad, 
      con moderación automática para evitar spam y promover un ambiente seguro.
      </p>

        </div>
         <div className="BOX"> 

      <AspectRatio className="CAJA" sx={{ width: 550 }}>
        <p className="imagen-DEV"></p>
      </AspectRatio> 
      <h2 className="titulo-imagenn">Actualizacion 1.1</h2>
      <p className="descr">
      Hemos lanzado una nueva actualización en nuestra página
      web, enfocada en mejorar la experiencia de usuario y optimizar 
      las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar 
      de un sistema de comentarios más eficiente en la sección de comunidad, 
      con moderación automática para evitar spam y promover un ambiente seguro.
      </p>

        </div>
 
    </body>
      <footer className="patas-dev">



      </footer>

  </header>




  )
}
export default Devlogcomponents;
