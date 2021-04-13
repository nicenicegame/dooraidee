import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Kanit', sans-serif;
  letter-spacing: 1px;
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
  font-weight: 200;
}
`

export const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  color: white;
`
