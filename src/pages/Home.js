import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import MovieDetail from '../pages/MovieDetail'
import MovieBackdrop from '../components/MovieBackdrop'
import MoviesRow from '../components/MoviesRow'

import { API_KEY, BASE_URL } from '../constant'

const Home = () => {
  const location = useLocation()
  const movieId = location.pathname.split('/')[1]
  const [movies, setMovies] = useState([])
  const [backdropPath, setBackdropPath] = useState('')
  const [detailMovie, setDetailMovie] = useState(null)

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      )
      const moviesData = await response.json()
      const allMovies = moviesData.results
      const initialBackdrop = allMovies[getRandomIndex(allMovies)].backdrop_path
      setBackdropPath(initialBackdrop)
      setMovies(allMovies)
    }

    fetchMovies()
  }, [])

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {movieId && detailMovie && (
            <MovieDetail
              movieId={movieId}
              detailMovie={detailMovie}
              setDetailMovie={setDetailMovie}
            />
          )}
        </AnimatePresence>
        <MovieBackdrop backdropPath={backdropPath} />
        <StyledHome>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            architecto fugit! Aut, explicabo rerum pariatur corrupti, iusto
            aliquam quasi, optio blanditiis recusandae odio inventore? Nisi
            odit, temporibus cumque accusantium ut quaerat aut nostrum velit
            nulla.
          </p>
          <GenerateButton>Generate</GenerateButton>
        </StyledHome>
        <MoviesRow movies={movies} setDetailMovie={setDetailMovie} />
      </AnimateSharedLayout>
    </>
  )
}

const StyledHome = styled(motion.div)`
  padding: 0 1rem;
  margin-top: -2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  padding-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 14px;
    padding: 0.5rem 0 2rem;
  }
`

const GenerateButton = styled(motion.button)`
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
