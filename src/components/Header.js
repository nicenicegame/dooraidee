import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Hamburger from './Hamburger'

function Header() {
  return (
    <StyledHeader>
      <div className="nav-right">
        <Link to="/">
          <Logo>DooRaiDee</Logo>
        </Link>
      </div>
      <div className="nav-left">
        <Hamburger />
      </div>
    </StyledHeader>
  )
}

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 10vh;
  background: linear-gradient(to bottom, #141414, transparent);
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

export const Logo = styled.h1`
  color: #e50914;
  font-size: 1.8rem;
  user-select: none;
  cursor: pointer;
`

export default Header
