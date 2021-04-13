import React from 'react'
import styled from 'styled-components'
import { IMAGE_PATH } from '../constant'

function MovieBackdrop({ backdropPath, isDetailPage }) {
  return (
    <Backdrop>
      {backdropPath && (
        <BackdropImage
          className="background-img"
          src={`${IMAGE_PATH}/${backdropPath}`}
          alt="initial img"
        />
      )}
      <Fade isDetailPage={isDetailPage} />
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
  object-fit: cover;
  height: calc(25vw + 200px);
`

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${(props) => (props.isDetailPage ? '40vh' : '20vh')};
  background: linear-gradient(transparent, #141414);
`

export default MovieBackdrop
