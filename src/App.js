import React from 'react'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './staticComponent/Navbar'
import Home from './page/Home'
import About from './page/About'
import Footer from './staticComponent/Footer'

export default function App() {
  return (
    <div className='' >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/order-now" element={<ProductList/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      

    </div>
  )
}
