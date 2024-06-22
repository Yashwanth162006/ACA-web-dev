import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginImg from "../../Images/Login.png"
import { ShopContext } from '../../contexts/ShopContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {isLogedIn,setIsLogedIn,userEmailAddress,userPassword,userName} = useContext(ShopContext);
  const navigate = useNavigate();
  function handleEmailChange(event){
    setEmail(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value);
  }
  function verifyCredentials(){
    if(email===userEmailAddress && password===userPassword){
      setIsLogedIn(1);
      navigate('/');
      toast(`Hello ${userName}`)
    }
    else{
      setPassword("");
      toast("wrong credentials");
    }
  }
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-content'>
          <h2>Sign In</h2>
          <div className="text-input-bar">
            <label>Email Address</label>
            <input type='email' heading='Email Address' placeholder='Enter email' onChange={handleEmailChange} value={email}></input>
          </div>
          <div className="text-input-bar">
            <label>Password</label>
            <input type='password' heading='Password' placeholder='Enter password' onChange={handlePasswordChange} value={password}></input>
          </div>
          <button onClick={verifyCredentials}>Sign In</button>
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
