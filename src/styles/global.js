import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}
`