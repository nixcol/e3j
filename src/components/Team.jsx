import styled from "styled-components";
import { TeamCard } from "./TeamCard";
import arrowLeft from '../assets/left.svg'
import arrowight from '../assets/right.svg'

export const Container = styled.section`
  background-color: #D9D9D9;
  padding: 40px 180px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .left-arrow , .right-arrow{
    margin-bottom: 60px;
  }

  .cards {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 100px;
  }
`

export const Title = styled.h2`
  color: #000000;
  font-weight: 900;
  font-size: 30px;
  margin-bottom: 40px;
  text-align: center;
`

export function Team() {
  return(
    <Container>
      <Title>Conheça Nossa Equipe</Title>
      <div className="wrapper">
      <div className="left-arrow">
      <img src={arrowLeft} alt="Passar para a esquerda" />
      </div>
      <div className="cards">
      <TeamCard occupation="Cargo" name="Nome Sobrenome"/>
      <TeamCard occupation="Cargo" name="Nome Sobrenome"/>
      <TeamCard occupation="Cargo" name="Nome Sobrenome"/>
      </div>
      <div className="right-arrow">
        <img src={arrowight} alt="Passar para a direita" />
      </div>
      </div>
    </Container>
  )
}