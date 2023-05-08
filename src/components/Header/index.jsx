import {Container} from './styles'

import Logo from '../../assets/Logo.svg'
import { Socials } from '../Socials'

export function Header(){
  return (
    <Container>
      <div className="logo">
        logo
      </div>

      <ul className='sections'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Conheça-nos</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <button>Cadastre-se</button>

      <Socials/>
    </Container>
  )
  
}