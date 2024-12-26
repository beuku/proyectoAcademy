
import './App.css'
import { Route, Routes } from 'react-router-dom'

import PagesInicial from './pages/PagesInicial'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<PagesInicial />} />
      </Routes>
    </>
  )
}

export default App
