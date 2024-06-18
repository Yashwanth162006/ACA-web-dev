import React from 'react'
import Input from '../../components/Inputbar'
import {NavLink} from 'react-router-dom'
import RegisterImg from '../../Images/Register.png'
const Register = () => {
  return (
    <div className='registration-container'>
      <div className='registration-form'>
        <div className='registration-content'>
          <h2>Register</h2>
          <Input type='text' heading='Name' placeholder='Enter name'/>
          <Input type='text' heading='Email Address' placeholder='Enter email'/>
          <Input type='password'heading='Password' placeholder='Enter password'/>
          <Input type='password' heading='Confirm Password' placeholder='Confirm password'/>
          <button>Register</button>
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
