import React from 'react'
import Ratings from './Ratings'
import { NavLink } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className = 'special-product'>
      <img src={props.src}/>
      <NavLink to={`/product/${props.id}`} className='sp-nav-link'><h3>{props.name}</h3></NavLink>
      <div className='special-product-info'>
        <div className='special-product-info-left'>
          <p>{props.brand}</p>
          <div className='special-product-rating'><Ratings rating={props.rating}/></div>
          <button>Add to cart</button>
        </div>
        <div className='special-product-info-right'>
          <button>${props.price}</button>
        </div>
      </div>
      <i class='fa-regular fa-heart'></i>
    </div>
  )
}

export default Product
