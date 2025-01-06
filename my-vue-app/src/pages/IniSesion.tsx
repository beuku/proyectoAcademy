import { useState } from "react";
import { Link } from "react-router-dom";
import RegitrarComponents from "../components/RegitrarComponents";
import { Input } from "@mui/material";
import "../styless/IniSesion.css"
import "../styless/HeaderStyless.css"

function IniSesion() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    
    const verifyData = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
      
        if (!email || !password) {
          alert("Por favor, complete todos los campos.");
          return;
        }
      
        try {
          const response = await fetch("http://localhost:4000/IniciarSesion", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          const result = await response.json();
      
          if (response.ok) {
            alert("Bienvenido a Shaq Veyter");
            console.log("Usuario autenticado:", result);
            
            
            setEmail("");
            setPassword("");
          } else {
            alert(`Error: ${result.message || "No se pudo iniciar sesión."}`);
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
          alert("Hubo un problema al intentar iniciar sesión.");
        }
      };
  
    return (
      <>
      
          <li>
              <Link className="link" to="/">Inicio</Link>
          </li>
          
          <div className="formulario">
              <h4>Cuenta Shaq Veyter</h4>
              <Input type="email" name="email" value={email} id="email" placeholder="Ingrese su correo" onChange={(e) => setEmail(e.target.value)} className="input"/>
              <Input type="password" name="password" value={password} id="password" placeholder="Ingrese una contraseña" onChange={(e) => setPassword(e.target.value)} className="input"/>
              <div>
                  <Input type="submit" value="Iniciar Sesion" className="boton" onClick={verifyData}/>
              </div>
              <li> Si no tiene una cuenta aqui puede,</li><RegitrarComponents />
          </div>
          
         
      </>
  )
}

export default IniSesion