import Footercomponents from "../components/Footercomponents"
import Devlogcomponents from "../components/Devlogcomponents"
import "../Carpetacomponente2/RealHeader"
import ComponenteDeComponenteHeader from "../Carpetacomponente2/RealHeader"


function DevLog() {
    return (
      <>
        <ComponenteDeComponenteHeader />
        
        <Devlogcomponents />
        
        <Footercomponents /> 
      </>
    )
  }
  
  export default DevLog