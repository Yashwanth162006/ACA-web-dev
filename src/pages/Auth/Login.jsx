import React, { useContext, useState } from 'react'
import Input from '../../components/Inputbar'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginImg from "../../Images/Login.png"
import { ShopContext } from '../../contexts/ShopContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {isLogedIn,setIsLogedIn} = useContext(ShopContext);
  const navigate = useNavigate();
  function handleEmailChange(event){
    setEmail(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value);
  }
  function verifyCredentials(){
    if(email){
      toast("Wrong Credentials");
      return;
    }else if(password){
      toast("Wrong Credentials");
      return;
    }
    else{
      setIsLogedIn(1);
      navigate('/');
    }
  }
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-content'>
          <h2>Sign In</h2>
          <Input type='email' heading='Email Address' placeholder='Enter email' onChange={handleEmailChange} value={email}/>
          <Input type='password' heading='Password' placeholder='Enter password' onChange={handlePasswordChange} value={password}/>
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
