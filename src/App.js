import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { GlobalStyles, StyledApp } from './GlobalStyles'

import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [detailMovie, setDetailMovie] = useState(null)

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Route exact path="/">
          <Home detailMovie={detailMovie} setDetailMovie={setDetailMovie} />
        </Route>
        <Route path="/search">
          <Search detailMovie={detailMovie} setDetailMovie={setDetailMovie} />
        </Route>
        <Footer />
      </StyledApp>
    </>
  )
}

export default App
