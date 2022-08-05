import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
function NavBar() {
  return (
    <nav className="nav-bar">
       <div className="menu-item">
            <Link to="" className='logo'>Better</Link>
            <div className="menu-item-container"> 
              <Link to="#" className='menu-item-link'>Our services</Link>
              <Link to="#" className='menu-item-link'>About us</Link>
              <Link to="#" className='menu-item-link'>View rates</Link>
              <Link to="#" className='menu-item-link'>Learn</Link>
              <Link to="#" className='menu-item-link'>FAQ</Link>
              <Link to="#" className='menu-item-link'>Find and Agent</Link>
            </div>
        </div>
        <div className="menu-item2">
            <Link to="#" className='sign'>Sign</Link>
            <Link to="#" className='started'>get started</Link>
        </div>
   </nav>
  )
}

export default NavBar