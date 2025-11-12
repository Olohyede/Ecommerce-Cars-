import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home.jsx'
import CarDetails from './Pages/CarDetails.jsx'
import Navbar from './Components/Navbar.jsx'
import Cars from './Pages/Cars.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import './App.css'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/car/:make/:model' element={<CarDetails />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
