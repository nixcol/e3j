import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    list-style: none;

    li {
        &:hover {
            transform: translateY(-5px);
        }
    }
`