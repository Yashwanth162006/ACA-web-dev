import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Ratings from './Ratings';

const ProductCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 0 },
      items: 1
    }
  };
  return (
      <div className='product-carousel'>
        <div className='product-carousel-top'>
          <Carousel responsive={responsive} showDots={true}>
            <div className='carousel-img'><img src={props.src1}/></div>
            <div className='carousel-img'><img src={props.src2}/></div>
            <div className='carousel-img'><img src={props.src3}/></div>
          </Carousel>
        </div>
        <div className='product-carousel-bottom'>
          <div className='product-carousel-bottom-left'>
              <h2>{props.title}</h2>
              <div className='price'>
                <h3>${props.price}</h3>
                <p>{props.description}</p>
              </div>
          </div>
          <div className='product-carousel-bottom-right'>
            <p>Brand: {props.brand}</p>
            <Ratings rating={props.rating}/>
            <p>Quantity: {props.quantity}</p>
            <p>In Stock: {props.stock}</p>
            <button><i class='fa-solid fa-cart-shopping'></i></button>
          </div>
        </div>
      </div>
  )
}

export default ProductCarousel
