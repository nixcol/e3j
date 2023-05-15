import { Container, Wrapper, Left, Right } from "./styles";
import arrowLeft from '../../assets/left.svg'
import arrowight from '../../assets/right.svg'

export function PsResult() {
  return (
    <Container>
      <div className="left-arrow">
      <img src={arrowLeft} alt="" />
      </div>
      <Wrapper>
        <Left>
          <div className="img"></div>
        </Left>
        <Right>
          <h1>Resultado PS 2023</h1>
          <p>
          Texto Texto Texto Texto Texto Texto TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto 
          </p>
          <button>saiba mais</button>
        </Right>
      </Wrapper>
      <div className="right-arrow">
        <img src={arrowight} alt="" />
      </div>
    </Container>
  )
}