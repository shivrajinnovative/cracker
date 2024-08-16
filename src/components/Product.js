import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBill, removeFromBill } from '../store/slices/billSlice'

export default function Product({item}) {
    const dispatch = useDispatch()
    const [qty,setQty]=useState("")
    const [price,setPrice]=useState(0)



    useEffect(()=>{ 
        if(qty && qty>0){
            // setPrice(qty*item.price)
            let data={
                id:item.id,
                name:item.name,
                brand:item.Brand,
                price:item.price,
                quantity:qty,
                total:item.price*qty
           }
           dispatch(addBill(data))
        }else{
            setPrice(0)
            dispatch(removeFromBill(item.id))
        }
    },[qty])

    

return (
    <div className='d-flex mb-3 mb-md-0 flex-wrap justify-content-around'>
        <div className='col-4 col-md-1 py-2 d-flex justify-content-center align-items-center'>
            <img src="https://picsum.photos/200/300" height="30px" width="30px" alt="" />
        </div>
        <div className='col-8 col-md-6 p-2'>
            <p className='m-0 fw-bold'>{item.name}</p>
            <p className='m-0'>{item.Brand}</p>
        </div>
        <div className="col-2 col-md-1 d-flex justify-content-center align-items-center">
            <del className='text-danger'> ₨. {item.oldPrice}</del>
        </div>
        <div className="col-2 col-md-1 d-flex justify-content-center align-items-center">
            <p className='m-0 fw-bold' > ₨. {item.price}</p>
        </div>
        <div className='col-4 col-md-2 d-flex px-3  py-2' >
            <input type="text" className='form-control text-center' placeholder='Qty' onChange={(e)=>setQty(Math.floor(e.target.value))} />
        </div>
        <div className='col-4 col-md-1 px-2  py-2'>
            <input type="text" disabled  className='form-control text-center' value={price} />
        </div>
    </div>
  )
}
