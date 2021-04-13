import React from 'react'
import styled from 'styled-components'

function Hamburger() {
  return (
    <StyledHamburger>
      <Line />
      <Line />
      <Line />
    </StyledHamburger>
  )
}

const StyledHamburger = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
`

const Line = styled.div`
  background-color: white;
  height: 2px;
  border-radius: 3px;
  width: 100%;
  margin: 4px 0;
`

export default Hamburger
