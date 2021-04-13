import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import MovieBackdrop from '../components/MovieBackdrop'
import Loading from '../components/Loading'
import { BASE_URL, API_KEY, COVER_IMAGE_PATH } from '../constant'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchMovieDetail() {
      const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      const movieData = await response.json()
      setMovie(movieData)
    }

    fetchMovieDetail()
  }, [id])

  return (
    <>
      {movie ? (
        <>
          <MovieBackdrop backdropPath={movie.backdrop_path} isDetailPage />
          <Movie>
            <MovieCover src={`${COVER_IMAGE_PATH}/${movie.poster_path}`} />
            <h1>{movie.title}</h1>
            <SmallText>{movie.genres.map((g) => g.name).join(', ')}</SmallText>
            <SmallText>Released date: {movie.release_date}</SmallText>
            <h2 className="overview-header">Overview</h2>
            <Overview>{movie.overview}</Overview>
          </Movie>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

const Movie = styled.div`
  margin-top: -10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 0 1rem;
  z-index: 10;

  .overview-header {
    padding: 2rem 0 1rem;
  }
`

const MovieCover = styled.img`
  align-self: center;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 2rem;
`

const SmallText = styled.p`
  font-size: 12px;
  color: gray;
  font-weight: 200;
`

const Overview = styled.p`
  font-size: 14px;
  font-weight: 200;
`

export default MovieDetail
