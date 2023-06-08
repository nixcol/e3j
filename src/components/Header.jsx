import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Socials } from './Socials'
import { Button } from "./Button";
import logo from '../assets/logo.svg'

export const Container = styled.header`
  max-width:100%;
  height: 116px;
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0px 56px 0px 200px;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }

  .sections {
    display: flex;
    gap: 25px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .2em;
    margin-right: 200px;
    position: relative;
    z-index: 1;
  }

  .sections li {

    .modal {
      position: absolute;
      top: 0;
      right: 210px;
      z-index: 100;
      background-color: #F6EB37;
      padding: 12px 15px;

      ul {  
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
      }

      a {
        color: #000000;
      }
    }

  }
  
  `
  export const Logo = styled.img`
    width: 93px;
    height: 93px;
    margin-right: 135px;
  `

  export const Nav = styled.nav`
    
  `

export function Header() {
  const location = useLocation();
  
  const [openModal, setOpenModal] = useState(false)

  function getFontWeight(path) {
    return location.pathname === path ? '700' : '300';
  };

  function modalHandler() {
    setOpenModal(true)
  }


  return (
    <Container>
      <Logo src={logo}/>

      <ul className='sections' >
        <li style={{ fontWeight: getFontWeight('/') }}><Link to='/'>Home</Link></li> 
        <li style={{ fontWeight: getFontWeight('/services') }}><Link to='/services'>Serviços</Link></li>
        <li style={{ fontWeight: getFontWeight('/about') }} onClick={modalHandler}><Link>Conheça-nos</Link>
            <div className="modal" style={openModal ? {display: 'flex'} : {display: 'none'}}>
              <ul className="modal-list">
              <li><Link to='#about'>Quem somos?</Link></li> 
              <li><Link to='/'>Nossa Equipe</Link></li> 
              <li><Link to='/'>Parceiros</Link></li> 
              </ul>
            </div>
        </li>
        <li style={{ fontWeight: getFontWeight('/blog') }}><Link to='/blog'>Blog</Link></li>
        <li style={{ fontWeight: getFontWeight('/contact') }}><Link to='/contact'>Contato</Link></li>
      </ul>

      <Link to='/budget'>
      <Button text="Cadastre-se" color="#000000" backgroundColor="#F6EB37" padding="16px 24px" fontSize="16px"/>
      </Link>

      <Socials />
    </Container>
  )

}