import { Container } from "./styles";

import social1 from '../../assets/1.svg'
import social2 from '../../assets/2.svg'
import social3 from '../../assets/3.svg'

export function Socials() {
  return(
    <Container>
        <li><a href=""><img src={social3} alt="" /></a></li>
        <li><a href=""><img src={social1} alt="" /></a></li>
        <li><a href=""><img src={social2} alt="" /></a></li>
    </Container>
  )
}