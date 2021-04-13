import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'

function MoviesRow({ movies }) {
  return (
    <>
      <RowHeader>Popular Movies</RowHeader>
      <Row>
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              coverImage={movie.poster_path}
              id={movie.id}
            />
          ))}
      </Row>
    </>
  )
}

const RowHeader = styled.h2`
  padding: 0 1rem;
  font-size: 1.4rem;
`

const Row = styled.div`
  padding: 1rem;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default MoviesRow
