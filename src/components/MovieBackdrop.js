import React from 'react'
import styled, { css } from 'styled-components'
import { IMAGE_PATH } from '../constant'

function MovieBackdrop({ backdropPath, isDetailPage }) {
  return (
    <Backdrop isDetailPage={isDetailPage}>
      {backdropPath && (
        <BackdropImage
          isDetailPage={isDetailPage}
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
  position: relative;
  display: flex;
  margin-top: -10vh;
  z-index: 5;

  ${(props) =>
    props.isDetailPage &&
    css`
      z-index: unset;
      margin-top: unset;
    `}
`

const BackdropImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: calc(25vw + 200px);

  ${(props) =>
    props.isDetailPage &&
    css`
      border-radius: 1.5rem 1.5rem 0 0;
    `}
`

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20vh;
  background: linear-gradient(transparent, #141414);

  ${(props) =>
    props.isDetailPage &&
    css`
      height: 50%;
      background: linear-gradient(transparent, rgb(50, 50, 50));
    `}
`

export default MovieBackdrop
