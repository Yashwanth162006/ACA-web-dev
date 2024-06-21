import React, { useContext } from 'react'
import Ratings from './Ratings'
import {NavLink} from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'
import { toast } from 'react-toastify'

const ProductCard = (props) => {
  const {addToCart,favouriteItems,addToFavourites,removeFromFavourites} = useContext(ShopContext);
  function handleAddToCart(){
    addToCart(props.id,1);
    toast("Added to Cart");
  }
  function toggleFromFavourites(){
    if(favouriteItems[props.id-1]===0){
      addToFavourites(props.id);
    }else{
      removeFromFavourites(props.id);
    }
  }
  return (
      <div className='product-card'>
        <img src={props.src} />
        <NavLink to={`/product/${props.id}`} className='product-details-link'><h4>{props.name}</h4></NavLink>
        <div className='product-card-rating'><Ratings rating={props.rating}/></div>
        <div className='product-basic-info'>
          <p>{props.brand}</p>
          <button>${props.price}</button>
        </div>
        <button onClick={handleAddToCart}><i class='fa-solid fa-cart-shopping'></i></button>
        {favouriteItems[props.id-1]===0?<i class='fa-regular fa-heart' onClick={toggleFromFavourites}></i>:<i class='fa-solid fa-heart' onClick={toggleFromFavourites} style={{color:'#f1069b'}}></i>}
    </div>
  )
}

export default ProductCard
