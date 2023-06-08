import styled from "styled-components";
import { Button } from "./Button";

export const Container = styled.section`
  background-color: #BFBEBE;
  color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Left = styled.div`
  margin-left: 100px;
  margin-right: 134px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  h1{
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
  }

  p {
    width: 447px;
    height: 300px;
    text-align: justify;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
  }

  button {
      color:  #D9D9D9;
      background: #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 25px;
      font-weight: 700;
      letter-spacing: .2em;
      text-transform: uppercase;
      padding: 20px 24px;
      border-radius: 10px;

      &:hover {
        scale: 1.05;
      }
  }
`
export const Right = styled.div`
  width: 50%;
  padding: 12px 0px;
  .img {
    background-color: #727070;
    width: 710px;
    height: 664px;
  }
`

export function About() {
  return(
    <Container>
      <Left>
        <h1>Quem somos?</h1>
        <p>Quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos quem somos.  </p>
        <Button text="Cadastre-se" color='#D9D9D9' backgroundColor="#000000" padding="20px 24px" fontSize="25px"/>
      </Left>
      <Right>
        <div className="img"></div>
      </Right>
    </Container>
  )
}