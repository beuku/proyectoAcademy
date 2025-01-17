import "../styless/AvisoLegalStyles.css";
import IndiceLateral from "./IndiceLateralComponents";


function AvisoLegalComponents() {
  return (
    <>
           
      <h1>Avisos Legales</h1>

      <div className="div">
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, 
        de Servicios de la Sociedad de la Información y Comercio Electrónico te informamos que el Titular del sitio web superadmin.
        es (en adelante, el 'sitio Web'), es Superadmin S.L. (en adelante, 'Superadmin'), 
        con NIF B-26563197 y domicilio social en calle Lardero N7, 5H - 26002 Logroño e inscrita en el Registro Mercantil de La Rioja en el Tomo 851, 
        libro 0, folio 128, hoja LO-18470, inscripción primera.
        Puedes contactar con Superadmin a través del correo electrónico ayuda@superadmin.es y a través de las 
        formas de contacto que encontrarás en <a href="https://superadmin.es/contacto"> https://superadmin.es/contacto</a>
      </div>
      <IndiceLateral />
      
    </>
  );
}

export default AvisoLegalComponents;
