import React from 'react'
import './Header.css'

import Hamburger from './Hamburger'

function Header() {
  return (
    <header>
      <div className="nav-right">
        <h1 className="logo">DooRaiDee</h1>
      </div>
      <div className="nav-left">
        <Hamburger />
      </div>
    </header>
  )
}

export default Header
