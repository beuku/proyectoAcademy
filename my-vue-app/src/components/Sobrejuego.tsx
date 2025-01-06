import { Link } from "react-router-dom";
import "../styless/Sobrejuego.css"
import ReactPlayer from "react-player";


function Sobrejuego() {
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
     
    

      <body className="body-sobrejuego">

     <h1 className="margen1"> ¡Sobre nuestro juego!</h1>
     
      <div className="url">
        <ReactPlayer url="https://www.youtube.com/watch?v=-U8Hbs0f0Ek"
        controls
        height={600}
        width={940}    
        />
      </div>


      <h4 > 

        
        <p className="margen2"> <h1 className="titulo-p">se trata tanto tanto</h1>
          albion online es un mmorpg no lineal en el 
          que escribes tu propia historia sin limitarte a
          seguir un camino prefijado, explora un amplio
          mundo abierto con cinco biomas unicos, todo cuant
          o hagas tendra su repercusíon en el mundo, con su 
          economia orientada al jugador de albion los jugadores

        </p>

        <p className="margen2"> <h1 className="titulo-p">sobre tanto tanto</h1>
          albion online es un mmorpg no lineal en el 
          que escribes tu propia historia sin limitarte a
          seguir un camino prefijado, explora un amplio
          mundo abierto con cinco biomas unicos, todo cuant
          o hagas tendra su repercusíon en el mundo, con su
          economia orientada al jugador de albion los jugadores 

        </p>
          
      </h4>
      

        </body>

  </header>
      
      

    
  )
}


export default Sobrejuego;