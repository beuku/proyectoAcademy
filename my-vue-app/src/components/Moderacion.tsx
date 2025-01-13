//bloquea palabras de comunidad 🗣🗣🗣
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

//bloquea palabras de review en descargas 🗣🗣🗣

interface ModeracionProps {
  comment: string;
}

const blockedWords = ["YOELPICHULA", "PICO", "NEGRO", "GAY", "WEKO", "ZORRA", ];


const filterComment = (comment: string) => {
  let filteredComment = comment;

  blockedWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    filteredComment = filteredComment.replace(regex, "********"); 
  });

  return filteredComment;
};


const Moderacion: React.FC<ModeracionProps> = ({ comment }) => {
  const filteredComment = filterComment(comment);
  return <>{filteredComment}</>;
};

export default Moderacion;
