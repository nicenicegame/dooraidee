import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { animate, motion } from 'framer-motion'

import MovieBackdrop from '../components/MovieBackdrop'
import { COVER_IMAGE_PATH } from '../constant'

const MovieDetail = ({ detailMovie, setDetailMovie }) => {
  const history = useHistory()
  const {
    title,
    genres,
    id,
    backdrop_path,
    poster_path,
    release_date,
    overview,
  } = detailMovie
  const stringId = id.toString()

  function closeDetailHandler(e) {
    if (
      e.target.classList.contains('shadow') ||
      e.target.classList.contains('close')
    ) {
      document.body.style.overflow = 'auto'
      setDetailMovie(null)
      history.push('/')
    }
  }

  return (
    <>
      <Backdrop
        className="shadow"
        onClick={closeDetailHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Card layoutId={stringId}>
          <CloseButton className="close" onClick={closeDetailHandler}>
            &#10006;
          </CloseButton>
          <MovieBackdrop backdropPath={backdrop_path} isDetailPage />
          <Movie>
            <MovieCover
              layoutId={`image ${stringId}`}
              src={`${COVER_IMAGE_PATH}/${poster_path}`}
            />
            <h1>{title}</h1>
            <SmallText>{genres.map((g) => g.name).join(', ')}</SmallText>
            <SmallText>Released date: {release_date}</SmallText>
            <h2 className="overview-header">Overview</h2>
            <Overview>{overview}</Overview>
          </Movie>
        </Card>
      </Backdrop>
    </>
  )
}

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  overflow-y: auto;
`

const Card = styled(motion.div)`
  position: absolute;
  margin: 0 2rem;
  z-index: 10;
`

const CloseButton = styled(motion.button)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  z-index: 20;
  transition: color 0.2s ease-in-out;
  transform: translateY(-50%);

  &:hover {
    color: red;
  }
`

const Movie = styled(motion.div)`
  background-color: rgb(50, 50, 50);
  margin-top: -10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 1.5rem 1.5rem;
  flex: 1;
  padding: 0 2rem 3rem;

  h1 {
    font-size: 2.2rem;
    position: relative;
    z-index: 3;
  }

  h1::after {
    z-index: -4;
    position: absolute;
    content: '';
    bottom: 8px;
    border-radius: 2px;
    left: 0;
    width: 30%;
    height: 10px;
    background-color: #e50914;
  }

  .overview-header {
    position: relative;
    padding: 2rem 0 1rem;
  }
`

const MovieCover = styled(motion.img)`
  align-self: center;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 2rem;
  z-index: 5;
`

const SmallText = styled(motion.p)`
  font-size: 12px;
  font-weight: 300;
  color: #7a7a7a;
`

const Overview = styled(motion.p)`
  font-size: 14px;
  font-weight: 300;
`

export default MovieDetail
