import Footercomponents from "../components/Footercomponents";
import Comunidadcomponents from "../components/Comunidadcomponents";
import "../Carpetacomponente2/RealHeader"
import ComponenteDeComponenteHeader from "../Carpetacomponente2/RealHeader";
import { useEffect, useState } from "react";



function Comunidad() {
     
    return (
        <>
            <ComponenteDeComponenteHeader />
            <Comunidadcomponents />
               
            <Footercomponents />
        </>
    );
}

export default Comunidad;
