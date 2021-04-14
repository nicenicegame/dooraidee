import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import MovieDetail from '../pages/MovieDetail'
import MovieBackdrop from '../components/MovieBackdrop'
import MoviesRow from '../components/MoviesRow'

function Home({ backdropPath, movies }) {
  const location = useLocation()
  const movieId = location.pathname.split('/')[1]

  return (
    <>
      {movieId && <MovieDetail movieId={movieId} />}
      <MovieBackdrop backdropPath={backdropPath} />
      <StyledHome>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          architecto fugit! Aut, explicabo rerum pariatur corrupti, iusto
          aliquam quasi, optio blanditiis recusandae odio inventore? Nisi odit,
          temporibus cumque accusantium ut quaerat aut nostrum velit nulla.
        </p>
        <GenerateButton>Generate</GenerateButton>
      </StyledHome>
      <MoviesRow movies={movies} />
    </>
  )
}

const StyledHome = styled.div`
  padding: 0 1rem;
  margin-top: -2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  flex: 1;
  padding-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 14px;
    padding: 0.5rem 0 2rem;
  }
`

const GenerateButton = styled.button`
  font-size: 18px;
  padding: 0.5rem 1.5rem;
  color: white;
  background-color: #e50914;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #bd060f;
  }
`

export default Home
