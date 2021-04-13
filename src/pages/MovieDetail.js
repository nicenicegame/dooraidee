import React from 'react'
import styled from 'styled-components'
import MovieBackdrop from '../components/MovieBackdrop'

function MovieDetail() {
  return (
    <>
      <MovieBackdrop />
      <Movie />
    </>
  )
}

const Movie = styled.div`
  flex: 1;
`

export default MovieDetail
