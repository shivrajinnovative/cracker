import React from 'react'
import Product from './Product'
export default function ProductGroup({id,product}) {
  


 return (
    <div className="accordion-item">
    <div className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
       <div className='bg-primary text-white' >
        Item #{id} 
       </div>
    </div>
    <div id={id} className={`accordion-collapse collapse ${id==="1" && "show"} `} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div className="row">
          
        </div>
       {
        product.map((item, index) => {
        
            return <Product item={item} key={index} />
        })
       }
      </div>
    </div>
  </div>
  )
}

