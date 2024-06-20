import React, { useContext } from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'


const Navigation = () => {
  
  const {cartItems} = useContext(ShopContext);
  function length(arr){
    return arr.filter((num)=>num!==0).length;
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
            <div className='nav-cart-count'>{length(cartItems)}</div>
              <NavLink to='/cart'className="nav-links">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>- Cart</span>
              </NavLink>
            </div>
            <div className='menu-items'>
            <div className='nav-like-count'>0</div>
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
