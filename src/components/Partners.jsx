import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  padding: 20px 150px 40px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 40px;

  .text-area{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cards {
    display: flex;
    gap: 30px;
  }
`

export const Title = styled.div`
`

export const Text = styled.p`
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.3rem;
  
`

export const Card = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid rgba(173, 173, 173, 0.85);
  border-radius: 5px;

  &:hover {
    scale: 1.150;
  }
`

export function Partners() {
  return(
    <Container>
      <div className="text-area">
      <Title>Parceiros</Title>
      <Text>Texto Texto Texto Texto Texto Texto TextoTexto </Text>
      </div>
      <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>      
      </div>
    </Container>
  )
}