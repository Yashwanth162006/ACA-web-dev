import React from 'react'
import Input from '../../components/Inputbar'
import { NavLink } from 'react-router-dom'
import LoginImg from "../../Images/Login.png"

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-content'>
          <h2>Sign In</h2>
          <Input type='text' heading='Email Address' placeholder='Enter email'/>
          <Input type='password' heading='Password' placeholder='Enter password'/>
          <button>Sign In</button>
          <p>New customer?<NavLink className="reg" to='/register'>Register</NavLink></p>
        </div>
        <div className='login-img'>
          <img src= {LoginImg}/>
        </div>
      </div>
    </div>
  )
}

export default Login
