import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { BASE_URL, API_KEY } from '../constant'
import { getRandomIndex } from '../pages/Home'
import MovieGridCard from './MovieGridCard'
import Generating from './Generating'

const DEFAULT_GENRE_ID = 28

const MovieGenerator = ({ genres, setDetailMovie }) => {
  const [genreId, setGenreId] = useState()
  const [randomMovie, setRandomMovie] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const defaultGenreId = localStorage.getItem('defaultGenreId')
    if (!defaultGenreId) {
      setGenreId(DEFAULT_GENRE_ID)
    } else {
      setGenreId(parseInt(defaultGenreId))
    }
  }, [])

  const getMoviesByGenre = async () => {
    const randomPage = Math.floor(Math.random() * 500 + 1)
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${randomPage}`
    )
    const data = await response.json()
    const moviesByGenre = data.results
    return moviesByGenre
  }

  const getRandomMovieByGenre = async () => {
    setLoading(true)
    setRandomMovie(null)
    const movies = await getMoviesByGenre()
    const validMovies = movies.filter((m) => {
      return m.poster_path && m.backdrop_path && m.title && m.id && m.overview
    })
    const randomIndex = getRandomIndex(validMovies)
    setRandomMovie(validMovies[randomIndex])
    setLoading(false)
  }

  const selectGenreIdHandler = (e) => {
    const selectedGenreId = e.target.value
    setGenreId(selectedGenreId)
    localStorage.setItem('defaultGenreId', selectedGenreId)
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
      {!loading ? (
        <>
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
        </>
      ) : (
        <Generating />
      )}
      <GenerateButton onClick={getRandomMovieByGenre}>Generate</GenerateButton>
    </>
  )
}

const RandomMovie = styled(motion.div)`
  width: 150px;

  img {
    border-radius: 10px;
  }
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
