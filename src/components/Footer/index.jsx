import {Container} from './styles'

import copyright from '../../assets/copyright.svg'
import { Socials } from '../Socials'

export function Footer(){
  return (
    <Container>
      <div className="cp">
        <img src={copyright} alt="" />
        <span>2023</span>
      </div>

      <Socials/>

    <p>CNPJ - 29.162.362/0001-60</p>

    </Container>
  )
  
}