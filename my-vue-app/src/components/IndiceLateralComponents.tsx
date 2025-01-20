import { Drawer, List, ListItemButton, ListItemText, Typography, Box } from "@mui/material";
import "../styless/AvisoLegalStyles.css";
export default function IndiceLateral() {
  // Secciones y datos específicos
  const sections = [
    { id: "section1", title: "1. Objeto" },
    { id: "section2", title: "2. Contenido" },
    { id: "section3", title: "3. Medidas de seguridad" },
    { id: "section4", title: "4. Propiedad intelectual" },
    { id: "section5", title: "5. Legislación aplicable y Jurisdicción" },
    { id: "section6", title: "6. Exención de responsabilidades" }
  ];

 
  const sectionData = {
    section1: "La finalidad del sitio Web de Superadmin tiene por objeto informar sobre Superadmin, las actividades que realiza y de los Servicios que presta, atender las solicitudes de compra y facilitar a los clientes la gestión de los Servicios contratados.",
    section2: "A través del sitio Web, Superadmin te facilita el acceso y la utilización de diversos contenidos que Superadmin o sus colaboradores han publicado por medio de Internet. A tal efecto, te obligas y comprometes a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por Superadmin, de otros Usuarios o de cualquier usuario de Internet. En todo caso, Superadmin se compromete a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, y ponerlo en conocimiento de las autoridades competentes.",
    section3: "El sitio Web utiliza un certificado de seguridad TLS para asegurar la autenticidad del servidor y la integridad y cifrado de las comunicaciones entre el Usuario y Superadmin. No obstante, debes ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto Superadmin no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos. Aunque Superadmin pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.",
    section4: "El sitio web Superadmin, incluyendo a título enunciativo pero no limitativo su programación, diseño y demás elementos necesarios para su funcionamiento, logotipos, texto, gráficos e imágenes son propiedad de Superadmin correspondiéndonos el ejercicio exclusivo de los derechos de explotación. Los diseños, logotipos, textos y gráficos ajenos a Superadmin y que pudieran aparecer en el sitio Web, pertenecen a sus respectivos propietarios. Superadmin reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no implicando su sola mención o aparición en el sitio Web la existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte de Superadmin.",
    section5: "Para la resolución de todas las controversias o cuestiones relacionadas con el sitio Web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales más cercanos a Logroño. En caso de que cualquier cláusula del presente documento sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de las presentes condiciones.",
    section6: "Superadmin no garantiza la inexistencia de errores en el acceso o en el contenido del sitio Web o del Blog, ni que estos se encuentren actualizados, aunque Superadmin realizará los mayores esfuerzos para evitarlos, corregirlos o para mantener actualizada su información. Sueradmin no se hace responsable por los daños que se puedan causar en los equipos o sistemas de los usuarios por posibles virus informáticos que se hubieran podido contraer por la navegación del usuario en el sitio Web.",
  };

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <div style={{ display: "flex"}}>
      <Drawer variant="permanent" anchor="left">
        <Box sx={{ width: 250, padding: 2, background: "#242424", color: "#f8dfde" }}>
          <Typography variant="h6">Índice</Typography>
          <List>
            {sections.map((section) => (
              <ListItemButton
                key={section.id}
                onClick={() => handleClick(section.id)}
              >
                <ListItemText primary={section.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ marginLeft: "260px", padding: 2,background: "#000000", width: "98%"  }}>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            
          >
            <Typography variant="h4"  sx={{ marginLeft: "20px",  }}>{section.title}</Typography>
            <Typography className="div2" >
              {sectionData[section.id as keyof typeof sectionData]}
            </Typography>
          </div>
        ))}
      </Box>
    </div>
  );
}