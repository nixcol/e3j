import { CiLinkedin} from 'react-icons/ci';
import { FaWhatsapp, FaInstagram} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'

import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    justify-self: center;
    align-items: center;
    gap: 8px;
    list-style: none;
`

export const Social = styled.li`
    .icon {
        font-size: 24px;
        color: #ffffff;
        transition: color 0.3s ease;

        &:hover {
            color: ${({theme}) => theme.colors.yellow};
            transform: translateY(-2px);
        }
    }
`

export function Socials() {
    return(
        <Container>
            <Social><a href="https://www.linkedin.com/company/etresj/about/" target='_ablank'><CiLinkedin size={30} className='icon'/></a></Social>
            <Social><a href="https://www.instagram.com/etresj/" target='_ablank'><FaInstagram className='icon'/></a></Social>
            <Social><a href=""><FiFacebook className='icon'/></a></Social>
            <Social><a href=""><FaWhatsapp className='icon'/></a></Social>
        </Container>
    )
}