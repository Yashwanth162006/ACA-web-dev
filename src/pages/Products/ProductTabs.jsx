import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'

const ProductTabs = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='shop-product-card'>
      <div className='shop-product-card-top'>
        <NavLink to={`/product/${props.id}`}><img src={props.src1}/></NavLink>
        <div class='shop-product-card-icons'>
          <i class='fa-regular fa-heart'></i>
          <button>{props.brand}</button>
        </div>
      </div>
      <div className='shop-product-card-bottom'>
        <div className='shop-product-card-bottom-left'>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <NavLink to={`/product/${props.id}`}><button className='button-read-more'>Read More <i class="fa-solid fa-arrow-right"></i></button></NavLink>
        </div>
        <div className='shop-product-card-bottom-right'>
          <p>${props.price}</p>
          <button onClick={()=>addToCart(props.id,1)}><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
