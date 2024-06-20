import React,{useState,useContext} from 'react'
import SmallProduct from './Products/SmallProduct'
import DSLR_1 from '../Images/DSLR/DSLR-1.png'
import Product_List from '../All_Products'
import { ShopContext } from '../contexts/ShopContext'

const Cart = () => {
  const {cartItems} = useContext(ShopContext);

  function createCartItem(item,i){
    const product = Product_List[i];
    if(item !== 0){
      return <SmallProduct key={product.id} src={product.src1} name={product.name} brand={product.brand} price={product.price} id={product.id} quantity={product.quantity}/>
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
            <div className='cart-products-div'>
              {cartItems.map(createCartItem)}
            </div>
          </div>
          <div className='cart-summary'>
              <h5>Summary</h5>
              <h6>Items: {itemCalculator(cartItems)}</h6>
              <h4>Total: ${priceCalculator(cartItems)}</h4>
              <button>Proceed To Checkout</button>
          </div>
      </div>
    </div>
  )
}

export default Cart
