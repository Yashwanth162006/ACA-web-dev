import React from 'react'
import Ratings from './Ratings'
import {NavLink} from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <NavLink id='product-card-link' to={props.link}  className={({isActive}) => isActive ? "active-product-card": "" }>
      <div className='product-card'>
        <img src={props.src} />
        <h3>{props.name}</h3>
        <Ratings rating={props.rating}/>
        <div className='product-basic-info'>
          <p>{props.brand}</p>
          <i class='fa-regular fa-heart'></i>
          <button>${props.price}</button>
        </div>
        <button><i class='fa-solid fa-cart-shopping'></i></button>
    </div>
    </NavLink>
  )
}

export default ProductCard
