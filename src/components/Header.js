import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'


export default function Header() {
    const [items,setItems]=useState(0)
    const [total,setTotal]=useState(0)
    const billData= useSelector((state)=>state.bill)
    // console.log(billData)


    useEffect(()=>{
        let totalPrice=0
        let totalItems=0
            billData?.forEach(element => {
                totalPrice+=element.total
                totalItems+=Number(element.quantity)
            });
        setItems(totalItems)
        setTotal(totalPrice)
    },[billData])


  return (
    <div className='row text-center sticky-top bg-white shadow py-4 my-3'>
        <div className="col-4">
            <p className='fs-6' >NUMBER OF PRODUCTS</p>
            <h3>{billData.length}</h3>
        </div>
        <div className="col-4">
            <p className='fs-6' >NUMBER OF ITEMS</p>
            <h3>{items}</h3>
        </div>
        <div className="col-4">
            <p className='fs-6' >TOTAL AMOUNT</p>
            <h3>{total}</h3>
        </div>
    </div>
  )
}

