import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import "../styless/FormularioStyles.css"

function FormularioComponents() {
  return (
    <div>
        <Link to="/Formulario" className="buttonFORMULARIO"><Button className="stylboton" variant="contained">Subir fanArt</Button></Link>
    </div>
  )
}

export default FormularioComponents