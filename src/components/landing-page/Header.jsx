import React from 'react'
import {Link} from 'react-router-dom'
import '../css/variables.css'
import '../css/generale.css'
import '../css/Header.css'
import NavBar from './NavBar'
function Header() {
  return (
    <header className="header">
        <NavBar/>
        <div className="header-content">
             <div className="header-text">
                  <h1>Home ownership all under one roof</h1>
                  <p>Your home is more than a place to live. It’s an investment in a better future.
                     We’ll help you unlock a better home and keep it working for you.</p>
             </div>
             <div className="header-link">
                <div className="buy">
                    <Link to="#">Buy</Link>
                    <div className="arrow"></div>
                </div>
                <div className="refinance">
                    <Link to="#">Refinance</Link>
                    <div className="arrow"></div>
                </div>
             </div>
        </div>
    </header>
  )
}

export default Header