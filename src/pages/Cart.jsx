import React,{useState,useContext} from 'react'
import SmallProduct from './Products/SmallProduct'
import DSLR_1 from '../Images/DSLR/DSLR-1.png'
import Product_List from '../All_Products'
import { ShopContext } from '../contexts/ShopContext'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const {cartItems,isLogedIn} = useContext(ShopContext);
  const state = isLogedIn;
  function createCartItem(item,i){
    const product = Product_List[i];
    if(item !== 0){
      return <SmallProduct key={product.id} src={product.src1} name={product.name} brand={product.brand} price={product.price} id={product.id} quantity={product.quantity} quantityChosen={cartItems[product.id-1]}/>
    }
  }
  function priceCalculator(arr){
    let p = 0;
    for(let i=0;i<arr.length;i++){
      const product = Product_List[i];
      p = p + (arr[i])*(product.price)
    }
    return p;
  }
  function itemCalculator(arr){
    let it = 0;
    for(let i=0;i<arr.length;i++){
      const product = Product_List[i];
      it = it + (arr[i])
    }
    return it;
  }
  return (
    <div className='shopping-container'>
        <div className='shopping-cart'>
          <div className='products-in-cart'>
            < p>Shopping Cart</p>
            {itemCalculator(cartItems)===0?<div className='Empty-Cart'><p>Your cart is empty. <NavLink to='/shop' className='cart-to-shop-link'> Go to Shop</NavLink></p></div>:<div className='cart-products-div'>
              {cartItems.map(createCartItem)}
            </div>}
          </div>
          {itemCalculator(cartItems)===0?null:<div className='cart-summary'>
              <h5>Summary</h5>
              <h6>Items: {itemCalculator(cartItems)}</h6>
              <h4>Total: ${priceCalculator(cartItems)}</h4>
              <NavLink to='/shipping'><button>Proceed To Checkout</button></NavLink>
          </div>}
      </div>
    </div>
  )
}

export default Cart
