import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COVER_IMAGE_PATH } from '../constant'

const MovieCard = React.forwardRef(({ coverImage, title, id }, ref) => {
  function loadMovieDetail() {
    document.body.style.overflow = 'hidden'
  }

  return (
    <Link to={`/${id}`} ref={ref} onClick={loadMovieDetail}>
      <MovieCover src={`${COVER_IMAGE_PATH}/${coverImage}`} alt={title} />
    </Link>
  )
})

function MoviesRow({ movies }) {
  const cardRef = React.createRef()
  const rowRef = useRef(null)

  function onSlide(e) {
    const rowWidth = rowRef.current.offsetWidth
    const cardWith = cardRef.current.offsetWidth + 16
    const scrollNumber = Math.floor(rowWidth / cardWith)

    const slider = e.target.classList
    if (slider.contains('slide-left')) {
      rowRef.current.scrollLeft += cardWith * scrollNumber
    } else if (slider.contains('slide-right')) {
      rowRef.current.scrollLeft -= cardWith * scrollNumber
    }
  }

  return (
    <>
      <RowHeader>Popular Movies</RowHeader>
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
              />
            ))}
        </Row>
        <ScrollButton className="slide-left" onClick={onSlide} />
      </Slider>
    </>
  )
}

const RowHeader = styled.h2`
  padding: 2rem 1rem 1rem;
  font-size: 1.4rem;
`

const Slider = styled.div`
  display: flex;
  align-items: center;
`

const Row = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem 0;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 250px;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    height: 100%;
  }

  a:last-child img {
    margin-right: 0;
  }
`

const ScrollButton = styled.div`
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

const MovieCover = styled.img`
  height: 100%;
  border-radius: 10px;
  margin-right: 1rem;
`

export default MoviesRow
