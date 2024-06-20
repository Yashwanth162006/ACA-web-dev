import React,{useContext} from 'react'
import { ShopContext } from '../../contexts/shopContext'
import {  useParams } from 'react-router'
import { Outlet} from 'react-router'
import  './ProductDetails.css'
import Ratings from './Ratings'
import { NavLink } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'
const ProductDetails = () => {
  const {Product_List,setSelectedProduct} = useContext(ShopContext); 
  const {id} = useParams();
  const product = Product_List.find((product)=>product.id === Number(id));
  function handleClick(){
    setSelectedProduct(product);
  }
  return (
    <div className='product-details-container'>
      <NavLink to='/'><button className='button'><i class="fa-solid fa-arrow-left"></i>Go Back</button></NavLink>
      <div className='product-details-product'>
        <div className='product-details-product-left'>
          <img src={product.src1}/>
            <i class='fa-regular fa-heart'></i>
        </div>
        <div className='product-details-product-right'>
          <h1 className='name'>{product.name}</h1>
          <p className='description'>{product.description}</p>
          <h2 className='price'>${product.price}</h2>
          <p>Brand: {product.brand}</p>
          <p>In Stock: {product.stock}</p>
          <p>Quantity: {product.quantity}</p>
          <div className='product-description-rating'><Ratings /></div>
          <div className='qty'>
            <p>Quantity:</p>
            <select name='qty'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className='product-review'>
        <div className='product-review-left'>
          <button>Write Your Review</button>
          <button>All Reviews</button>
          <NavLink to='relatedproducts' className={({ isActive }) => 
    ['side-nav-links', isActive ? "myActiveClass" : null]
      .filter(Boolean)
      .join(" ")
  }><button onClick={handleClick}>Related Products</button></NavLink>
        </div>
        <div className='product-review-right'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
