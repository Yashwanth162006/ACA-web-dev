import React, { useContext } from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'


const Navigation = () => {
  
  const {cartItems,favouriteItems} = useContext(ShopContext);
  function length(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
      sum=sum+arr[i];
    }
    return sum;
  }
  function length1(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
    return sum;
  }
  return (
    <div className="main-div">
      <nav className='menu-bar'>
          <div className='top'>
            <div className='menu-items'>
              <NavLink to='/' className="nav-links">
                <i class="fa-solid fa-house"></i>
                <span>- Home</span>
              </NavLink>
            </div>
            <div className='menu-items'>
              <NavLink to='/shop'className="nav-links">
                <i class="fa-solid fa-bag-shopping"></i>
                <span>- Shop</span>
              </NavLink>
            </div>
            <div className='menu-items'>
              {length(cartItems)===0?null:<div className='nav-cart-count'>{length(cartItems)}</div>}
              <NavLink to='/cart'className="nav-links">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>- Cart</span>
              </NavLink>
            </div>
            <div className='menu-items'>
              {length1(favouriteItems)===0?null:<div className='nav-like-count'>{length1(favouriteItems)}</div>}
              <NavLink to='favorites'className="nav-links">
                <i class="fa-solid fa-heart"></i>
                <span>- Liked</span>              
              </NavLink>
            </div>
          </div>
          <div className='bottom'>
            <div className='menu-items'>
              <NavLink to='/login'className="nav-links">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                <span>- Login</span>
              </NavLink>
            </div>
            <div className='menu-items'>
              <NavLink to='/register'className="nav-links">
                <i class="fa-solid fa-user-plus"></i>
                <span>- Register</span>
              </NavLink>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navigation
