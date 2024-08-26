import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-success mt-5 text-warning' >
        <div className="container py-3 py-md-5">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <h2 className='fw-bold fs-3' >
                    Contact Us</h2>
                    <h4>Mail:-</h4>
                    <p>Lorem ipsum dolor sit.</p>
                    <h4>Call:-</h4>
                    <p>0000000000</p>
                </div>
                <div className="col-md-6 col-lg-4">
                    <h2 className='fw-bold fs-3' >
                    Quick Links</h2>
                    <p><Link className='nav-link' to="/">Home</Link></p>
                    <p><Link className='nav-link' to="/order-now">Order Now</Link></p>
                    <p><Link className='nav-link' to="/about">About us </Link></p>
                    <p><Link className='nav-link' to="/contact-us">Contact Us </Link></p>
                </div>
                <div className="col-lg-4">
                    <h2 className='fw-bold fs-3' >Reach Us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.556601440815!2d73.01530474141116!3d19.029488428661686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c384cd88403f%3A0x19e35480197b42c8!2sInnovative%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1724324392785!5m2!1sen!2sin" width="80%" height="200" style={{"border":"0"}} loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
