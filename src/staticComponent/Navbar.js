import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=''>
        <div className='row container-fluid bg-primary text-center text-white'>
            <div className="col-md-4 py-1">
                <p className='fs-6 m-0' >Call Us Now : - 0000000000</p>
            </div>
            <div className="col-md-4 py-1">
                <p className='fs-6 m-0' >Location :- India </p>
            </div>
            <div className="col-md-4 py-1">
                <p className='fs-6 m-0' >Connect With Us - </p>
            </div>
        </div>
        <div className='text-center bg-warning'>
            <h2 className='display-5 fw-bolder py-3 py-md-5 brandName' >SHREE SAMARTH FIREWORKS</h2>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link fs-5 px-3 text-uppercase fw-medium active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 px-3 text-uppercase fw-medium" to="order-now">Order Now</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 px-3 text-uppercase fw-medium" to="about">About us </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 px-3 text-uppercase fw-medium" to="order-now">Contact us  </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
