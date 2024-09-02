import React from 'react'
import "./Navbar.css"
import { assets } from '../admin_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logos} alt=''/>
      <img className="profile" src={assets.profile} alt=''/>  
    </div>
  )
}

export default Navbar