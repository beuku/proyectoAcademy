
import './App.css'
import { Route, Routes } from 'react-router-dom'

import PagesInicial from './pages/PagesInicial'
import SobreEljuego from './pages/SobreEljuego'
import DevLog from './pages/DevLog'
import Descarga from './pages/Descarga'
import Comunidad from './pages/Comunidad'
import AvisoLegal from './pages/AvisoLegal'
import Registrar from './pages/Registrar'
import IniSesion from './pages/IniSesion'
import Formulario from './pages/Formulario'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<PagesInicial />} />
        <Route path='/SobreEljuego' element={<SobreEljuego />} />
        <Route path='/DevLog' element={<DevLog/>} />
        <Route path='/Descarga' element={<Descarga />} />
        <Route path='/Comunidad' element={<Comunidad />} />
        <Route path='/AvisoLegal' element={<AvisoLegal />} />
        <Route path='/Registrar' element={<Registrar />} />
        <Route path='/IniSesion' element={<IniSesion />} />
        <Route path='/Formulario' element={<Formulario />} />
      </Routes>
    </>
  )
}

export default App
