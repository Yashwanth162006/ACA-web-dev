import React from 'react'

const SmallProduct = (props) => {
  return (
    <div className='product-for-cart'>
      <img src={props.src} />
      <div>
        <h4 className='cart-item-name'>{props.name}</h4>
        <p>{props.brand}</p>
        <p>${props.price}</p>
      </div>
      <select name="qty" id="quantity-of-products">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <i class="fa-solid fa-trash-can"></i>
    </div>
  )
}

export default SmallProduct
