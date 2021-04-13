import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Hamburger from './Hamburger'

function Header() {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setIsNavbarSolid(true)
      } else {
        setIsNavbarSolid(false)
      }
    })
  }, [])

  return (
    <StyledHeader solid={isNavbarSolid}>
      <div className="nav-right">
        <Link to="/">
          <Logo>DRD</Logo>
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
  background: ${(props) =>
    props.solid ? 'black' : 'linear-gradient(to bottom, #141414, transparent)'};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  transition: all 0.3s ease-in-out;
`

export const Logo = styled.h1`
  color: #e50914;
  font-size: 1.8rem;
  user-select: none;
  cursor: pointer;
`

export default Header
