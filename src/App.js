import React from 'react'
import { Route } from 'react-router-dom'
import { GlobalStyles, StyledApp } from './GlobalStyles'

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Route path={['/:id', '/']}>
          <Home />
        </Route>
        <Footer />
      </StyledApp>
    </>
  )
}

export default App
