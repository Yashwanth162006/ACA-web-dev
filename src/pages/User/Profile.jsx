import React, { useContext, useState } from 'react'
import './Profile.css'
import { ShopContext } from '../../contexts/ShopContext'
import { toast } from 'react-toastify'
const Profile = () => {
  const {userName,userEmailAddress,userPassword,setUserName,setUserEmailAddress,setUserPassword} = useContext(ShopContext);
  const [profileName,setProfileName] = useState(userName);
  const [profileEmailAddress,setProfileEmailAddress] = useState(userEmailAddress);
  const [profileOldPassword,setProfileOldPassword] = useState("");
  const [profileNewPassword,setProfileNewPassword] = useState("");
  const [profileNewPasswordConfimation,setProfileNewPasswordConfirmation] = useState("");
  function changeProfileName(event){
    setProfileName(event.target.value);
  }
  function changeProfileEmailAddress(event){
    setProfileEmailAddress(event.target.value);
  }
  function changeProfileOldPassword(event){
    setProfileOldPassword(event.target.value);
  }
  function changeProfileNewPassword(event){
    setProfileNewPassword(event.target.value);
  }
  function chnageProfileNewPasswordConfirmation(event){
    setProfileNewPasswordConfirmation(event.target.value);
  }
  function updateProfile(){
    if(profileNewPassword === profileNewPasswordConfimation){
      if(profileName === ""){
        toast('Invalid Name');
        return;
      }else{
        setUserName(profileName);
      }
      if(profileEmailAddress === ""){
        toast('Invalid Email Address');
        return;
      }else{
        setUserEmailAddress(profileEmailAddress);
      }
      if(profileNewPassword === ""){
        toast('Invalid Password Type');
        return;
      }else{
        setUserPassword(profileNewPassword);
      }
      toast('Profile Updated Successfully');
    }else{
      toast('Passwords did not match');
    }
  }
  return (
    <div className='user-profile-container'>
      <div className='user-profile'>
        <h1>Update Profile</h1>
        <p>Name</p>
        <input type='text' placeholder='Enter name' value={profileName} onChange={changeProfileName}/>
        <p>Email Address</p>
        <input type='email' placeholder='Enter email' value={profileEmailAddress} onChange={changeProfileEmailAddress}/>
        <p>Enter Current Password</p>
        <input type='password' placeholder='Enter password' value={profileOldPassword} onChange={changeProfileOldPassword}/>
        {profileOldPassword===userPassword?<div className='password-change'><p>Enter New Password</p>
        <input type='password' placeholder='Enter password' value={profileNewPassword} onChange={changeProfileNewPassword}/>
        <p>Confirm Password</p>
        <input type='password' placeholder='Confirm password' value={profileNewPasswordConfimation} onChange={chnageProfileNewPasswordConfirmation}/></div>:null}
        <div>
          <button onClick={updateProfile}>Update</button>
          <button>My Orders</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
