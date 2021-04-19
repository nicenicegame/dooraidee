import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { BASE_URL, API_KEY } from '../constant'
import { getRandomIndex } from '../pages/Home'
import MovieGridCard from './MovieGridCard'

const DEFAULT_GENRE_ID = 28

const MovieGenerator = ({ genres, setDetailMovie }) => {
  const [genreId, setGenreId] = useState(DEFAULT_GENRE_ID)
  const [randomMovie, setRandomMovie] = useState(null)

  const getMoviesByGenre = async () => {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    )
    const data = await response.json()
    const moviesByGenre = data.results
    return moviesByGenre
  }

  const getRandomMovieByGenre = async () => {
    const movies = await getMoviesByGenre()
    const randomIndex = getRandomIndex(movies)
    console.log(movies[randomIndex])
    setRandomMovie(movies[randomIndex])
  }

  const selectGenreIdHandler = (e) => {
    setGenreId(e.target.value)
  }

  return (
    <>
      <Options>
        <label htmlFor="genre">Choose Genre: </label>
        <SelectBox name="genre" value={genreId} onChange={selectGenreIdHandler}>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </SelectBox>
      </Options>
      {randomMovie && (
        <RandomMovie>
          <MovieGridCard
            title={randomMovie.title}
            coverImage={randomMovie.poster_path}
            id={randomMovie.id}
            setDetailMovie={setDetailMovie}
          />
        </RandomMovie>
      )}
      <GenerateButton onClick={getRandomMovieByGenre}>Generate</GenerateButton>
    </>
  )
}

const RandomMovie = styled(motion.div)`
  width: 200px;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  label {
    font-size: 14px;
  }
`

const SelectBox = styled.select`
  padding: 0.5rem;
  margin: 0 0.75rem;
  font-size: 16px;
  border-radius: 5px;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 1.5px;
  background: #e50914;
  outline: none;
  cursor: pointer;
  border: none;
  color: white;

  &:hover {
    background-color: #bd060f;
  }
`

const GenerateButton = styled.button`
  padding: 0.5rem 0.75rem;
  margin-top: 1rem;
  color: white;
  letter-spacing: 1.5px;
  background-color: #e50914;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #bd060f;
  }
`

export default MovieGenerator
