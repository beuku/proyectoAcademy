import "../styless/RegistrarStyles.css"
import "../styless/HeaderStyless.css"
import { Input } from "@mui/material"
import RegitrarComponents from "../components/RegitrarComponents"
import { Link } from "react-router-dom"
import  { useState } from "react";



function Registrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async (e: { preventDefault: () => void }) =>{
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:4000/Registrar',{
        method: 'post',
        body: JSON.stringify({name, email, password}),
        headers:{
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
     
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
    
        <li>
            <Link className="link" to="/">Inicio</Link>
        </li>
        <RegitrarComponents />
        <div className="formulario">
            <h4>Datos de usuario</h4>
            <Input type="text" name="name" value={name} id="name" placeholder="Ingrese un nombre" onChange={(e) => setName(e.target.value)} className="input"/>
            <Input type="email" name="email" value={email} id="email" placeholder="Ingrese su correo" onChange={(e) => setEmail(e.target.value)} className="input"/>
            <Input type="password" name="password" value={password} id="password" placeholder="Ingrese una contraseña" onChange={(e) => setPassword(e.target.value)} className="input"/>
            <div>
                <Input type="submit" value="Registrar" className="boton" onClick={collectData}/>
            </div>
        </div>
        
       
    </>
  )
}

export default Registrar