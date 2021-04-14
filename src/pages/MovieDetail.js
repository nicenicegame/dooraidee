import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import MovieBackdrop from '../components/MovieBackdrop'
import Loading from '../components/Loading'
import { BASE_URL, API_KEY, COVER_IMAGE_PATH } from '../constant'

function MovieDetail({ movieId }) {
  const history = useHistory()
  const [movie, setMovie] = useState(null)

  function closeDetailHandler(e) {
    if (
      e.target.classList.contains('shadow') ||
      e.target.classList.contains('close')
    ) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  useEffect(() => {
    async function fetchMovieDetail() {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      )
      const movieData = await response.json()
      console.log(movieData)
      setMovie(movieData)
    }

    fetchMovieDetail()
  }, [movieId])

  return (
    <>
      {movie ? (
        <>
          <Backdrop className="shadow" onClick={closeDetailHandler}>
            <Card>
              <CloseButton className="close" onClick={closeDetailHandler}>
                &#10006;
              </CloseButton>
              <MovieBackdrop backdropPath={movie.backdrop_path} isDetailPage />
              <Movie>
                <MovieCover src={`${COVER_IMAGE_PATH}/${movie.poster_path}`} />
                <h1>{movie.title}</h1>
                <SmallText>
                  {movie.genres.map((g) => g.name).join(', ')}
                </SmallText>
                <SmallText>Released date: {movie.release_date}</SmallText>
                <h2 className="overview-header">Overview</h2>
                <Overview>{movie.overview}</Overview>
              </Movie>
            </Card>
          </Backdrop>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  overflow-y: auto;
`

const Card = styled.div`
  position: absolute;
  margin: 0 2rem;
  z-index: 11;
`

const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background-color: transparent;
  color: #a1141b;
  font-size: 1.5rem;
  z-index: 20;
  transform: translateY(-50%);
`

const Movie = styled.div`
  background-color: rgb(50, 50, 50);
  margin-top: -10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 1.5rem 1.5rem;
  flex: 1;
  padding: 0 1rem 2rem;

  h1 {
    font-size: 2.2rem;
    position: relative;
    z-index: 3;
  }

  h1::after {
    z-index: -4;
    position: absolute;
    content: '';
    bottom: 8px;
    border-radius: 2px;
    left: 0;
    width: 30%;
    height: 10px;
    background-color: #e50914;
  }

  .overview-header {
    position: relative;
    padding: 2rem 0 1rem;
  }
`

const MovieCover = styled.img`
  align-self: center;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 2rem;
  z-index: 5;
`

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #7a7a7a;
`

const Overview = styled.p`
  font-size: 14px;
  font-weight: 300;
`

export default MovieDetail
