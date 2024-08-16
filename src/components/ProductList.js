import React from 'react'
import ProductGroup from './ProductGroup'
import products from '../data/productData'

export default function ProductList() {


  return (
    <div>
        <div className="accordion" id="accordionExample">
            {
                products.map((product, index) => {
                    return <ProductGroup product={product} id="1" key={index} />
                })
            }
        </div>
    </div>
  )
}
