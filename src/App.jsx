import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import CarDetails from './Pages/CarDetails.jsx'
import Navbar from './Components/Navbar.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/car/:id' element={<CarDetails />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
