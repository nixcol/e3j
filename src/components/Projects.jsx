import styled from "styled-components";
import { ProjectsCard } from "./ProjectsCard";
import rightArrow from '../assets/right.svg'

export const Container = styled.section`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 44px;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 30px;
` 

export const CardWrapper = styled.div`
  display: flex;
  gap: 100px;
`


export const Btn1 = styled.button`
  background: transparent;
  color: #ffffffff;
  border: 1px solid #ffffffff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  padding: 8px 30px;
  margin-bottom: 80px;
`
export const Btn2 = styled.button`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  padding: 18px 20px;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.2em;
  margin-bottom: 64px;

  display: flex;
  align-items: center;
  gap: 5px;
`

export function Projects() {
  return(
    <Container>
      <Title>Conheça nossos projetos</Title>
      <Btn1>Portfólio completo</Btn1>
      <CardWrapper>
      <ProjectsCard description="Descrição do projeto"/>
      <ProjectsCard description="Descrição do projeto"/>
      </CardWrapper>
      <span>slider</span>
      <Btn2>
        Orçamento 
        <img src={rightArrow} alt="" />
      </Btn2>
    </Container>
  )
}