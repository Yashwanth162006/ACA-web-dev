import React from 'react'
import SmallProduct from './Products/SmallProduct'

const Cart = () => {
  return (
    <div className='shopping-container'>
        <div className='shopping-cart'>
          <div className='products-in-cart'>
            < p>Shopping Cart</p>
            <SmallProduct />
          </div>
          <div className='cart-summary'>

          </div>
      </div>
    </div>
  )
}

export default Cart
