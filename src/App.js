import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div className='container pt-5' >
      <Header/>
      <ProductList/>
    </div>
  )
}
