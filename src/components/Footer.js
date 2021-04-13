import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
      <p className="small">DooRaiDee&copy; 2021</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: rgb(30, 30, 30);
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  margin-top: 4rem;
`

export default Footer
