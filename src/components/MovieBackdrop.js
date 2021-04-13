import React from 'react'
import styled from 'styled-components'
import { IMAGE_PATH } from '../constant'

function MovieBackdrop({ backdropPath }) {
  return (
    <Backdrop>
      {backdropPath && (
        <BackdropImage
          className="background-img"
          src={`${IMAGE_PATH}/${backdropPath}`}
          alt="initial img"
        />
      )}
      <Fade />
    </Backdrop>
  )
}

const Backdrop = styled.div`
  z-index: -10;
  position: relative;
  display: flex;
  margin-top: -10vh;
  z-index: 5;
`

const BackdropImage = styled.img`
  width: 100%;
`

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20vh;
  background: linear-gradient(transparent, #141414);
`

export default MovieBackdrop
