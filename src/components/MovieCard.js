import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COVER_IMAGE_PATH } from '../constant'

function MovieCard({ coverImage, title, id }) {
  return (
    <Link to={`/${id}`}>
      <MovieCover src={`${COVER_IMAGE_PATH}/${coverImage}`} alt={title} />
    </Link>
  )
}

const MovieCover = styled.img`
  height: 250px;
  border-radius: 10px;
  margin-right: 1rem;
`

export default MovieCard
