import "../styless/DevlogStyles.css";
import AspectRatio from '@mui/joy/AspectRatio';
import { Typography } from '@mui/material'; 

interface UpdateBoxProps{title: string; description: string; }

function UpdateBox({ title, description }: UpdateBoxProps) {
  return (
    <div className="BOX"> 
      <AspectRatio className="CAJA" sx={{ width: 550 }}>
        <p className="imagen-DEV"></p>
      </AspectRatio>
      <Typography variant="h2" className="titulo-imagenn">{title}</Typography>
      <Typography variant="body1" className="descr">{description}</Typography>
    </div>
  );
}

function Devlogcomponents() {
  const updates = [
    { title: "Actualizacion 1.4", description: "Hemos lanzado una nueva actualización en nuestra página web, enfocada en mejorar la experiencia de usuario y optimizar las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar de un sistema de comentarios más eficiente en la sección de comunidad, con moderación automática para evitar spam y promover un ambiente seguro." },
    { title: "Actualizacion 1.3", description: "Hemos lanzado una nueva actualización en nuestra página web, enfocada en mejorar la experiencia de usuario y optimizar las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar de un sistema de comentarios más eficiente en la sección de comunidad, con moderación automática para evitar spam y promover un ambiente seguro." },
    { title: "Actualizacion 1.2", description: "Hemos lanzado una nueva actualización en nuestra página web, enfocada en mejorar la experiencia de usuario y optimizar las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar de un sistema de comentarios más eficiente en la sección de comunidad, con moderación automática para evitar spam y promover un ambiente seguro." },
    { title: "Actualizacion 1.1", description: "Hemos lanzado una nueva actualización en nuestra página web, enfocada en mejorar la experiencia de usuario y optimizar las funcionalidades del sitio. Ahora, los usuarios podrán disfrutar de un sistema de comentarios más eficiente en la sección de comunidad, con moderación automática para evitar spam y promover un ambiente seguro." },
  ];

  return (
    <body className='body-Devlog'>
      <Typography variant="h1" className="desarrolladores-">
        !Desarrolladores!
      </Typography>
      <Typography variant="h3" className="-somos">
        Apartado de versiones del juego, Donde los usuarios 
        podran visualizar y acceder a las últimas correcciones 
        implementadas.
      </Typography>

      {updates.map((update, index) => (
        <UpdateBox 
          key={index} 
          title={update.title} 
          description={update.description} 
        />
      ))}

    </body>
  );
}

export default Devlogcomponents;
