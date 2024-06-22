import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='user-profile-container'>
      <div className='user-profile'>
        <h1>Update Profile</h1>
        <p>Name</p>
        <input type='text' placeholder='Enter name'/>
        <p>Email Address</p>
        <input type='email' placeholder='Enter email'/>
        <p>Enter Current Password</p>
        <input type='password' placeholder='Enter password'/>
        <p>Enter New Password</p>
        <input type='password' placeholder='Enter password'/>
        <p>Confirm Password</p>
        <input type='password' placeholder='Confirm password'/>
        <div>
          <button>Update</button>
          <button>My Orders</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
