import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import MovieBackdrop from './components/MovieBackdrop'
import MovieDetail from './components/MovieDetail'
import Footer from './components/Footer'

import { API_KEY, BASE_URL } from './constant'

function App() {
  const [movies, setMovies] = useState([])
  const [initialImage, setInitialImage] = useState('')

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
      setInitialImage(allMovies[getRandomIndex(allMovies)].backdrop_path)
      setMovies(allMovies)
    }

    fetchMovies()
  }, [])

  return (
    <div className="App">
      <Header />
      <MovieBackdrop initialImage={initialImage} />
      <MovieDetail />
      <Footer />
    </div>
  )
}

export default App
