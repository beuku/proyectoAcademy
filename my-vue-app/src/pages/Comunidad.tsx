import Footercomponents from "../components/Footercomponents";
import Comunidadcomponents from "../components/Comunidadcomponents";
import { useEffect, useState } from "react";



function Comunidad() {
     const [formularios, setFormularios] = useState<any[]>([]);
   
    useEffect(() => {
        const fetchFormularios = async () => {
          try {
            const response = await fetch("http://localhost:4000/Comunidad");
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setFormularios(result); // Guardar los datos en el estado
          } catch (error) {
            console.error("Error al obtener los formularios:", error);
          }
        };
    
        fetchFormularios(); // Llamar a la función al cargar el componente
      }, []);
    return (
        <>
            <Comunidadcomponents />
            <h3>FanArts</h3>
            <div className="fanarts" >
            {formularios.map((form, index) => (
                <div key={index}>
                <h5>{form.name}</h5>
                <p>{form.comentario}</p>
                <img
                    src={`http://localhost:4000${form.image}`} // Ruta completa de la imagen
                    alt="Imagen subida"
                    style={{ width: "200px", height: "auto"}}
                />
                </div>
                ))};
            </div>   
            <Footercomponents />
        </>
    );
}

export default Comunidad;
