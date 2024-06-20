import React,{useState} from 'react'
import SmallProduct from './Products/SmallProduct'
import DSLR_1 from '../Images/DSLR/DSLR-1.png'
import Product_List from '../All_Products'

const Cart = () => {
  const [price,setPrice] = useState(0);
  const [items,setItems] = useState(0);

  function createCartItem(product){
    return <SmallProduct src={product.src1} name={product.name} brand={product.brand} price={product.price}/>
  }
  return (
    <div className='shopping-container'>
        <div className='shopping-cart'>
          <div className='products-in-cart'>
            < p>Shopping Cart</p>
            <div className='cart-products-div'>
              {Product_List.filter((product)=>product.isInCart).map(createCartItem)}
            </div>
          </div>
          <div className='cart-summary'>
              <h5>Summary</h5>
              <h6>Items: {items}</h6>
              <h4>Total: ${price}</h4>
              <button>Proceed To Checkout</button>
          </div>
      </div>
    </div>
  )
}

export default Cart
