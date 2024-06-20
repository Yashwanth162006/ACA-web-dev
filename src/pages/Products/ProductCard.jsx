import React, { useContext } from 'react'
import Ratings from './Ratings'
import {NavLink} from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'

const ProductCard = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
      <div className='product-card'>
        <img src={props.src} />
        <NavLink to={`/product/${props.id}`} className='product-details-link'><h4>{props.name}</h4></NavLink>
        <div className='product-card-rating'><Ratings rating={props.rating}/></div>
        <div className='product-basic-info'>
          <p>{props.brand}</p>
          <button>${props.price}</button>
        </div>
        <button onClick={()=>addToCart(props.id,1)}><i class='fa-solid fa-cart-shopping'></i></button>
        <i class='fa-regular fa-heart'></i>
    </div>
  )
}

export default ProductCard
