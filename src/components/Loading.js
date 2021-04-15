import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

function Loading() {
  return (
    <Backdrop>
      <Spinner />
    </Backdrop>
  )
}

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export default Loading
