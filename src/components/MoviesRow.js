import React, { useRef, forwardRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Loading from './Loading'

import { COVER_IMAGE_PATH, API_KEY, BASE_URL } from '../constant'

const MovieCard = forwardRef(
  ({ coverImage, title, id, setDetailMovie }, ref) => {
    const history = useHistory()
    const stringId = id.toString()
    const [isLoading, setIsLoading] = useState(false)

    async function loadMovieDetail() {
      setIsLoading(true)
      const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      const movieData = await response.json()
      setDetailMovie(movieData)
      setIsLoading(false)
      document.body.style.overflow = 'hidden'
      history.push(`/${id}`)
    }

    return (
      <StyledMovieCard layoutId={stringId} ref={ref} onClick={loadMovieDetail}>
        <MovieCover
          layoutId={`image ${stringId}`}
          src={`${COVER_IMAGE_PATH}/${coverImage}`}
          alt={title}
        />
        {isLoading && <Loading />}
      </StyledMovieCard>
    )
  }
)

const MoviesRow = ({ movies, setDetailMovie, rowTitle }) => {
  const cardRef = useRef()
  const rowRef = useRef()

  function onSlide(e) {
    const rowWidth = rowRef.current.offsetWidth
    const cardWidth = cardRef.current.offsetWidth + 14
    const scrollNumber = Math.floor(rowWidth / cardWidth)
    console.log(rowWidth, cardWidth, scrollNumber)

    const slider = e.target.classList
    if (slider.contains('slide-left')) {
      rowRef.current.scrollLeft += cardWidth * scrollNumber
    } else if (slider.contains('slide-right')) {
      rowRef.current.scrollLeft -= cardWidth * scrollNumber
    }
  }

  return (
    <>
      <RowHeader>{rowTitle}</RowHeader>
      <Slider>
        <ScrollButton className="slide-right" onClick={onSlide} />
        <Row ref={rowRef}>
          {movies &&
            movies.map((movie) => (
              <MovieCard
                ref={cardRef}
                key={movie.id}
                title={movie.title}
                coverImage={movie.poster_path}
                id={movie.id}
                setDetailMovie={setDetailMovie}
              />
            ))}
        </Row>
        <ScrollButton className="slide-left" onClick={onSlide} />
      </Slider>
    </>
  )
}

const StyledMovieCard = styled(motion.div)`
  cursor: pointer;
  position: relative;
  height: 100%;
  margin-right: 1rem;
`

const RowHeader = styled(motion.h2)`
  padding: 2rem 1rem 1rem;
  font-size: 1.4rem;
`

const Slider = styled(motion.div)`
  display: flex;
  align-items: center;
`

const Row = styled(motion.div)`
  flex: 1;
  position: relative;
  padding: 1rem 0;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 250px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${StyledMovieCard}:last-child {
    margin-right: 0;
  }
`

const ScrollButton = styled(motion.div)`
  position: relative;
  background-color: transparent;
  height: 250px;
  width: 3rem;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
  }

  &.slide-right::after {
    border-right: 15px solid #e50914;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
  }

  &.slide-left::after {
    border-left: 15px solid #e50914;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
  }

  &.slide-left:hover::after {
    border-left-color: #be0811;
  }

  &.slide-right:hover::after {
    border-right-color: #be0811;
  }
`

const MovieCover = styled(motion.img)`
  height: 100%;
  border-radius: 10px;
`

export default MoviesRow
