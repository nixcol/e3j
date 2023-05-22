import arrowLeft from '../assets/left.svg'
import arrowight from '../assets/right.svg'
import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: gray;

  .left-arrow, .right-arrow {
    padding: 0px 20px;
    &:hover {
        scale: 1.088;
    }
  } 

`

export const Wrapper = styled.div`
  width: 95%; // ta foda 
  background-color: #727070;
  color: #fff;
  display: flex;
  align-items: center;
`

export const Left = styled.div` 
  width: 50%;
  padding: 40px 30px;
  .img {
    width: 700px;
    height: 500px;
    background-color: #D9D9D9;
  }
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 85px;
  padding: 70px 30px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
    text-align: justify;
    letter-spacing: 10%;
    font-size: 20px;
    line-height: 30px;
    width: 578px;
    height: 90px;
  }

  button {
      color:  #D9D9D9;
      background: #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 16px;
      font-weight: 700;
      letter-spacing: .2em;
      text-transform: uppercase;
      padding: 12px 20px;
      border-radius: 5px;
      width: 175px;
      margin-left: 400px;

      &:hover {
        scale: 1.05;
      }
  }

`

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