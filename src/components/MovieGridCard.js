import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Loading from './Loading'
import { COVER_IMAGE_PATH, BASE_URL, API_KEY } from '../constant'

const MovieGridCard = ({ title, coverImage, id, setDetailMovie }) => {
  const [isLoading, setIsLoading] = useState(false)
  const stringId = id.toString()

  async function loadMovieDetail() {
    setIsLoading(true)
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const movieData = await response.json()
    setDetailMovie(movieData)
    setIsLoading(false)
    document.body.style.overflow = 'hidden'
  }

  return (
    <StyledCard onClick={loadMovieDetail} layoutId={stringId}>
      <MovieImage
        layoutId={`image ${stringId}`}
        src={`${COVER_IMAGE_PATH}/${coverImage}`}
        alt={title}
      />
      {isLoading && <Loading />}
    </StyledCard>
  )
}

const StyledCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
`

const MovieImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default MovieGridCard
