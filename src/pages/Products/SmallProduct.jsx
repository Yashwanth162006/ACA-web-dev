import React, { useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext';

const SmallProduct = (props) => {
  function createArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
  }
  function createOption(value){
    return <option value={value}>{value}</option>
  }
  const {removeFromCart} = useContext(ShopContext);

  return (
    <div className='product-for-cart'>
      <img src={props.src} />
      <div>
        <h4 className='cart-item-name'>{props.name}</h4>
        <p>{props.brand}</p>
        <p>${props.price}</p>
      </div>
      <select name="qty" id="quantity-of-products">
        {createArray(props.quantity).map(createOption)}
      </select>
      <i class="fa-solid fa-trash-can" onClick={()=>removeFromCart(Number(props.id))}></i>
    </div>
  )
}

export default SmallProduct
