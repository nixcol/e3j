import styled from "styled-components";

export const Container = styled.footer`
  background-color: #C9C9C9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;

  .cp{
        display: flex;
        align-items: center;
        gap: 12px;

        span {
          font-weight: 600;
          font-size: 18px;
        }
    }

  p {
    font-size: 18px;
    font-weight: 600;
  }
`