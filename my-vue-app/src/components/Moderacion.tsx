export const palabrasProhibidas = [
    "malo", "grosero", "insulto", "prohibido" , "gragussi" 
  ];
  
  export function filtrarComentario(comentario: string): string {
    let comentarioFiltrado = comentario;
    palabrasProhibidas.forEach((palabra) => {
      const regex = new RegExp(`\\b${palabra}\\b`, 'gi');  
      comentarioFiltrado = comentarioFiltrado.replace(regex, "****");
    });
    return comentarioFiltrado;
  }
  