import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div id='navbar'>
        <div id="nav-left">
            <h1>URL Shortener</h1>
        </div>
        
        <div id="nav-right">
            <a href="#">New page</a>
            <a href="#">About</a>
        </div>

    </div>
  )
}

export default Navbar