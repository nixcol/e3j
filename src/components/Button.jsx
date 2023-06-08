import styled from "styled-components";

export const Container = styled.button`
    color: ${({ color }) => color};
    background: ${({ backgroundColor }) => backgroundColor};
    box-shadow: 0px 4px 4px rgba(146, 137, 137, 0.25);
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 600;
    border: none;
    letter-spacing: .2em;
    text-transform: uppercase;
    padding: ${({ padding }) => padding};
    border-radius: 5px;
    margin-right: 45px;

    &:hover {
      transform: scale(1.05);
    }
`;

export function Button({ text, color, backgroundColor, padding, ...rest }) {
  return <Container color={color} backgroundColor={backgroundColor} padding={padding} {...rest}>{text}</Container>;
}