import { Link } from "react-router-dom";
import RegitrarComponents from "../components/RegitrarComponents";
import { Input } from "@mui/material";
import { useState } from "react";
import "../styless/IniciarSesion.css"
import "../styless/HeaderStyless.css"
import IniciarSesionComponets from "../components/IniciarSesionComponets";



function IniciarSesion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    
  const collectData = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
  
      
      if ( !email || !password) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      try {
        
        const response = await fetch("http://localhost:4000/Registrar", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Usuario registrado con éxito.");
          console.log("Respuesta del servidor:", result);
          
          
          setEmail("");
          setPassword("");
        } else {
          console.error("Error al registrar usuario:", result);
          alert(`Error: ${result.message || "No se pudo registrar el usuario."}`);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Hubo un problema al intentar registrar el usuario.");
      }
    };
  
    return (
      <>
      
          <li>
              <Link className="link" to="/">Inicio</Link>
          </li>
          <IniciarSesionComponets />
          <div className="formulario">
              <h4>Cuenta Shaq Veyter</h4>
              <Input type="email" name="email" value={email} id="email" placeholder="Ingrese su correo" onChange={(e) => setEmail(e.target.value)} className="input"/>
              <Input type="password" name="password" value={password} id="password" placeholder="Ingrese una contraseña" onChange={(e) => setPassword(e.target.value)} className="input"/>
              <div>
                  <Input type="submit" value="Registrar" className="boton" onClick={collectData}/>
              </div>
              <li>
                <RegitrarComponents />
              </li>
          </div>
          
         
      </>
  )
}

export default IniciarSesion