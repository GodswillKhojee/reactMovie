import React from 'react'
import "../css/navbar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar=brand'>
            <Link to='/'>Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link to='/' className='nav-Link'>Home</Link>
            <Link to='/favorite' className='nav-Link'>Favorite</Link>
        </div>
    </nav>
  )
}

export default NavBar