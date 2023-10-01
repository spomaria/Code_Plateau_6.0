import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  // React
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Footer />
    {/* <BrowserRouter/>
    <BrowserRouter> */}
        <Routes>
          <Route path='About' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App