import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Inicio from './screens/Inicio';
import SobreNos from './screens/SobreNos';
import NaoEncontrado from './screens/NaoEncontrado';
import Menu from './components/Menu/Menu';
export default function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}  />
        <Route path="/sobrenos" element={<SobreNos/>}  />
        <Route path="*" element={<NaoEncontrado/>} />
      </Routes>
    </BrowserRouter>
  )
}