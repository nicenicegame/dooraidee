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

.helper-text {
  opacity: 0.6;
}

.loader2,
.loader2:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader2 {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`

export const StyledApp = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #141414;
  color: whitesmoke;
`
