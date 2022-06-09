import React from 'react';
import {Link} from 'react-router-dom' ;
import logo from '../logo.svg';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-cevter'>
        <Link to="/">
          <img src={logo} alt="cocktail logo" className='logo'>

          </img>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar