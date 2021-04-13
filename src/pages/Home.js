import React from 'react'
import styled from 'styled-components'
import MovieBackdrop from '../components/MovieBackdrop'

function Home({ backdropPath }) {
  return (
    <>
      <MovieBackdrop backdropPath={backdropPath} />
      <StyledHome>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          architecto fugit! Aut, explicabo rerum pariatur corrupti, iusto
          aliquam quasi, optio blanditiis recusandae odio inventore? Nisi odit,
          temporibus cumque accusantium ut quaerat aut nostrum velit nulla.
        </p>
        <GenerateButton>Generate</GenerateButton>
      </StyledHome>
    </>
  )
}

const StyledHome = styled.div`
  margin-top: -2rem;
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  flex: 1;
  padding-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 14px;
    padding: 0.5rem 0 2rem;
  }
`

const GenerateButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  color: white;
  background-color: #b3262d;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #83191e;
  }
`

export default Home
