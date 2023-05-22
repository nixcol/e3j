import social1 from '../assets/1.svg'
import social2 from '../assets/2.svg'
import social3 from '../assets/3.svg'

import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    list-style: none;

    /* li {
        &:hover {
            transform: translateY(-5px);
        }
    } */
`

export const Social = styled.li`
    &:hover {
            transform: translateY(-5px);
        }
`

export function Socials() {
    return(
        <Container>
            <Social><a href=""><img src={social3} alt="" /></a></Social>
            <Social><a href=""><img src={social1} alt="" /></a></Social>
            <Social><a href=""><img src={social2} alt="" /></a></Social>
        </Container>
    )
}