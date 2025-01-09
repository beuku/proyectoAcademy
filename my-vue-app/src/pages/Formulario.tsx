import { useState } from "react";
import { Link } from "react-router-dom";
import "../styless/IniSesion.css";
import "../styless/HeaderStyless.css";

function Formulario() {
  const [name, setName] = useState("");
  const [comentario, setComentario] = useState("");
  const [image, setImage] = useState<File | null>(null); // Cambiar a null para manejar el archivo

  const verifyData = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !comentario || !image) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("comentario", comentario);
      formData.append("image", image);

      const response = await fetch("http://localhost:4000/Formulario", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Datos enviados correctamente.");
        console.log("Datos guardados:", result);

        setName("");
        setComentario("");
        setImage(null);
      } else {
        alert(`Error: ${result.message || "No se pudo enviar el formulario."}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <>
      <li>
        <Link className="link" to="/">Inicio</Link>
      </li>

      <div className="formulario">
        <h4>Cuenta Shaq Veyter</h4>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          placeholder="Ingrese su nombre"
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <textarea
          itemType="text"
          name="comentario"
          value={comentario}
          id="comentario"
          placeholder="Ingrese su comentario"
          onChange={(e) => setComentario(e.target.value)}
          className="input"
          required
        />
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setImage(e.target.files[0]); // Actualiza el estado con el archivo seleccionado
            } else {
              setImage(null); // Restablece el estado si no hay archivo seleccionado
            }
          }}
          accept="image/*"
          required
        />
        <button type="submit" onClick={verifyData}>Enviar</button>
      </div>
    </>
  );
}

export default Formulario;