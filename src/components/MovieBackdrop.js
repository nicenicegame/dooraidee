import React from 'react'
import './MovieBackdrop.css'

import { IMAGE_PATH } from '../constant'

function MovieBackdrop({ initialImage }) {
  return (
    <div className="container">
      <img
        className="background-img"
        src={`${IMAGE_PATH}/${initialImage}`}
        alt="initial img"
      />
      <div className="fade"></div>
    </div>
  )
}

export default MovieBackdrop
