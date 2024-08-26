import React from 'react'
import { Link } from 'react-router-dom'
import Carousal from '../staticComponent/Carousal'
import Category from '../staticComponent/Category'
import Brands from '../staticComponent/Brands'

export default function Home() {
  return (
    <div className=' text-center'>
        
        <Carousal/>
        <Category/>
        <Link className='btn btn-success rounded-0' to="order-now" > Order Now</Link>
        <Brands/>
        <Link className='btn btn-success rounded-0' to="order-now" > Order Now</Link>

    </div>
  )
}
