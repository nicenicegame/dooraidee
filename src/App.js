import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GlobalStyles, StyledApp } from './GlobalStyles'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

import { API_KEY, BASE_URL } from './constant'

function App() {
  const [movies, setMovies] = useState([])
  const [backdropPath, setBackdropPath] = useState('')

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
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home backdropPath={backdropPath} movies={movies} />
          </Route>
          <Route path="/favorite">{/* Favorite */}</Route>
          <Route path="/:id">
            <MovieDetail />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </>
  )
}

export default App
