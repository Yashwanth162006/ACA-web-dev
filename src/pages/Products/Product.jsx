import React, { useContext } from 'react'
import Ratings from './Ratings'
import { NavLink } from 'react-router-dom'
import  { ShopContext } from '../../contexts/ShopContext'

const Product = (props) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className = 'special-product'>
      <img src={props.src}/>
      <NavLink to={`/product/${props.id}`} className='sp-nav-link'><h3>{props.name}</h3></NavLink>
      <div className='special-product-info'>
        <div className='special-product-info-left'>
          <p>{props.brand}</p>
          <div className='special-product-rating'><Ratings rating={props.rating}/></div>
          <button onClick={()=>addToCart(props.id,1)}>Add to cart</button>
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
