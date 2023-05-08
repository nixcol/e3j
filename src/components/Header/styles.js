import styled from "styled-components";


export const Container = styled.header`
  width:100%;
  height: 116px;
  background-color: #D9D9D9CC;
  color: #000000;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .logo {
    background-color: #BBBBBB;
    width: 93px;
    height: 93px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin-left: 130px;
    margin-right: 250px;
  }

  .sections {
    display: flex;
    gap: 25px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-weight: 300;
    margin-right: 200px;

    li {
      &:hover{
        scale: 1.02;
      }
    }
  }

  button {
    color:  rgba(217, 217, 217, 0.8);
    background: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .2em;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: 5px;
    margin-right: 45px;

    &:hover {
      scale: 1.05;
    }
  }

`