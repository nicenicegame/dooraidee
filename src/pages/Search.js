import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion'

import MovieDetail from '../components/MovieDetail'
import MovieGridCard from '../components/MovieGridCard'
import Loading from '../components/Loading'
import Search from '../components/Search'
import { BASE_URL, API_KEY } from '../constant'

const Movies = ({ detailMovie, setDetailMovie }) => {
  const [defaultMovies, setDefaultMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(false)
  let displayMovies = []

  if (!searchInput) {
    displayMovies = defaultMovies
  } else {
    displayMovies = searchMovies
  }

  useEffect(() => {
    const fetchMoviesByName = async () => {
      setLoading(true)
      const query = encodeURI(searchInput)
      const searchResponse = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      )
      const searchData = await searchResponse.json()
      console.log(searchData)
      setSearchMovies(searchData.results)
      setLoading(false)
    }

    searchInput.trim() && fetchMoviesByName()
  }, [searchInput])

  useEffect(() => {
    async function fetchDefaultMovies() {
      setLoading(true)
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
      )
      const moviesData = await response.json()
      const allMovies = moviesData.results
      setDefaultMovies(allMovies)
      setLoading(false)
    }

    fetchDefaultMovies()
  }, [])

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {detailMovie && (
            <MovieDetail
              detailMovie={detailMovie}
              setDetailMovie={setDetailMovie}
            />
          )}
        </AnimatePresence>
        <StyledMovies>
          <h3>Search Movies By Name</h3>
          <Search setSearchInput={setSearchInput} />
          {!loading && displayMovies.length === 0 ? (
            <NotFound>
              <h2>No Result Found.</h2>
            </NotFound>
          ) : (
            <MoviesList>
              {!loading && displayMovies ? (
                displayMovies.map(
                  (movie) =>
                    movie.poster_path &&
                    movie.backdrop_path && (
                      <MovieGridCard
                        key={movie.id}
                        title={movie.title}
                        coverImage={movie.poster_path}
                        id={movie.id}
                        setDetailMovie={setDetailMovie}
                      />
                    )
                )
              ) : (
                <Loading />
              )}
            </MoviesList>
          )}
        </StyledMovies>
      </AnimateSharedLayout>
    </>
  )
}

const StyledMovies = styled(motion.div)`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const MoviesList = styled(motion.div)`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
`

const NotFound = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 400;
    color: gray;
  }
`

export default Movies
