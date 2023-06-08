import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`


export const Card = styled.div`
  background: #D9D9D9;
  width: 378px;
  height: 362px;
`

export const Description = styled.p `
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`

export function ProjectsCard({description}) {
  return(
    <Container>
        <Card/>
        <Description>{description}</Description>
    </Container>
  )
}