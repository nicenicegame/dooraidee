import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 1.5px
}

h1 {
  font-weight: 700;
}

p {
  font-weight: 400;
}

a {
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
}

.small {
  font-size: 12px;
  font-weight: 300;
}
`

export const StyledApp = styled(motion.div)`
  min-height: 100vh;
  background-color: #141414;
  color: whitesmoke;
`
