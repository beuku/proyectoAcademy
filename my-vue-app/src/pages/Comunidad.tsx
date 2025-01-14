import Footercomponents from "../components/Footercomponents";
import Comunidadcomponents from "../components/Comunidadcomponents";
import "../Carpetacomponente2/RealHeader"
import ComponenteDeComponenteHeader from "../Carpetacomponente2/RealHeader";


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
