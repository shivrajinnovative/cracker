import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Brands() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <div className='container py-3 py-md-5' >
            <h2 className='py-3 fs-1 fw-bold' >Featured  Brands</h2>
            <Slider {...settings}>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
          <div>
            <img src="./images/standard.png" className='col-10 mx-3 rounded-4' alt="" />
          </div>
        </Slider>
    
        </div>
      )
}
