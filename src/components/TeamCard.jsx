import styled from "styled-components";
import { Socials } from "./Socials";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`

export const Box = styled.div`
  border: 2px solid #ADADADD9;
  width: 200px;
  height: 200px;
  border-radius: 5px;
`

export const Occupation = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`

export const Name = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 7px;
`

export function TeamCard({occupation, name}) {
  return(
    <Container>
      <Box/>
      <Occupation>{occupation}</Occupation>
      <Name>{name}</Name>
      <Socials/>
    </Container>
  )
}