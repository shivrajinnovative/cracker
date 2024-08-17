import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='container pt-5' >
      {/* <BrowserRouter> */}
      <Header />
      <ProductList/>
        {/* <Routes>
          <Route path="/" element={<ProductList/>} />
        </Routes>
      </BrowserRouter> */}
      
      

    </div>
  )
}
