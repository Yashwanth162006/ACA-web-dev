import React, { useContext, useState } from 'react'
import Input from '../../components/Inputbar'
import {NavLink, useNavigate} from 'react-router-dom'
import RegisterImg from '../../Images/Register.png'
import { ShopContext } from '../../contexts/ShopContext'
import { toast } from 'react-toastify'

const Register = () => {
  const [regName,setRegName] = useState("");
  const [regEmailAddress,setRegEmailAddress] = useState("");
  const [regPassword,setRegPassword] = useState("");
  const [regPasswordConfirmation,setRegPasswordConfirmation] = useState("");
  const {setUserName,setUserEmailAddress,setUserPassword} = useContext(ShopContext);
  const navigate = useNavigate();
  function handleChange1(event){
    setRegName(event.target.value);
    console(regName);
  }
  function handleChange2(event){
    setRegEmailAddress(event.target.value);
  }
  function handleChange3(event){
    setRegPassword(event.target.value);
  }
  function handleChange4(event){
    setRegPasswordConfirmation(event.target.value);
  }
  function registerUser(){
    if((regName==="") || (regEmailAddress==="") || (regPassword==="") || (regPasswordConfirmation==="")){
      toast('Enter all the fields');
      return;
    }
    setUserName(regName);
    setUserEmailAddress(regEmailAddress);
    if(regPassword === regPasswordConfirmation){
      setUserPassword(regPassword);
      navigate('/login');
      toast('Successfully Registered');
    }else{
      toast('Passwords did not match');
    }
  }
  return (
    <div className='registration-container'>
      <div className='registration-form'>
        <div className='registration-content'>
          <h2>Register</h2>
          <div className="text-input-bar">
            <label>Name</label>
            <input type='text' heading='Name' placeholder='Enter name' value={regName} onChange={handleChange1}></input>
          </div>
          <div className="text-input-bar">
            <label>Email Address</label>
            <input type='text' heading='Email Address' placeholder='Enter email' value={regEmailAddress} onChange={handleChange2}></input>
          </div>
          <div className="text-input-bar">
            <label>Enter Password</label>
            <input type='password'heading='Password' placeholder='Enter password' value={regPassword} onChange={handleChange3}></input>
          </div>
          <div className="text-input-bar">
            <label>Confirm Password</label>
            <input type='password' heading='Confirm Password' placeholder='Confirm password' value={regPasswordConfirmation} onChange={handleChange4}></input>
          </div>
          <button onClick={registerUser}>Register</button>
          <p>Already have an account?<NavLink className="log" to='/login'>Login</NavLink></p>
        </div>
        <div className='registration-img'>
          <img src={RegisterImg}/>
        </div>
      </div>
    </div>
  )
}

export default Register
