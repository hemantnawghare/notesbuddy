import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><h3 className='logo'>NOTES<span className='logo-sub'> BUDDY </span></h3></Link>
        <div className='search-container'>
            <input type="text" className="input-container" placeholder='Search For Notes' />
            <div className="search">
                <img src={assets.search_icon} alt="search" />
            </div>
        </div>
        <div className='navbar-right'>
            <button className='register'>Register</button>
            <button className='login'>Login</button>
        </div>
    </div>
  )
}

export default Navbar