import React,{useContext,useState} from 'react'
import { ShopContext } from '../../contexts/ShopContext'
import {  useParams } from 'react-router'
import { Outlet} from 'react-router'
import  './ProductDetails.css'
import Ratings from './Ratings'
import { NavLink } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'
const ProductDetails = () => {
  const [quantity,setQuantity] = useState(1);
  const {Product_List,setSelectedProduct,addToCart,favouriteItems,addToFavourites,removeFromFavourites} = useContext(ShopContext); 
  const {id} = useParams();
  const product = Product_List.find((product)=>product.id === Number(id));
  function createArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
  function handleClick(){
    setSelectedProduct(product);
  }
  function handleQuantity(event){
    setQuantity(Number(event.target.value));
  }
  function createOption(value){
    return <option value={value}>{value}</option>
  }
  function toggleFromFavourites(){
    if(favouriteItems[product.id-1]===0){
      addToFavourites(product.id);
    }else{
      removeFromFavourites(product.id);
    }
  }
  return (
    <div className='product-details-container'>
      <NavLink to='/'><button className='button'><i class="fa-solid fa-arrow-left"></i>Go Back</button></NavLink>
      <div className='product-details-product'>
        <div className='product-details-product-left'>
          <img src={product.src1}/>
            <i class='fa-regular fa-heart' onClick={toggleFromFavourites}></i>
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
            <select name='qty' onClick={handleQuantity}>
                {createArray(product.quantity).map(createOption)}
            </select>
          </div>
          <NavLink to='/cart'><button onClick={()=>addToCart(Number(id),quantity)}>Add To Cart</button></NavLink>
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
