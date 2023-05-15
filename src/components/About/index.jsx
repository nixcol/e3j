import {Container, Left, Right} from './styles'

export function About() {
  return(
    <Container>
      <Left>
        <h1>Quem somos?</h1>
        <p>Quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos.  </p>
        <button>Cadastre-se</button>
      </Left>
      <Right>
        <div className="img"></div>
      </Right>
    </Container>
  )
}