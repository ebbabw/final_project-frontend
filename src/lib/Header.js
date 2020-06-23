import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Logo } from './Logos'
import { LogoCart } from './Logos'
import { Logomenu } from './Logos'

import { Burgermenu } from './Burgermenu'


export const Header = () => {

  const [showmenu, setShowmenu] = useState(false);

  const totalPrice = useSelector((store) => (
      store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))


  return (


      <HeaderContainer>   

            <Headerwrapper>

            <LogoWrapperMenu>
              <Logomenu src='/assets/menulogo.png' onClick={() => {setShowmenu(!showmenu)}}></Logomenu>
            </LogoWrapperMenu>
           
             <LogoWrapper>
              <Link to="/"><Logo src='/assets/logocwg.png'></Logo></Link>
              </LogoWrapper>

               <Li>
               <StyledLink to="/">Home</StyledLink>
               </Li>

               <Li>
               <StyledLink to="/donate">Donate</StyledLink>
               </Li>
               
               <Li>
               <StyledLink to="/whatwedo">What we do</StyledLink>
               </Li>

               <Li>
               <StyledLink to="/allmembers">Our members</StyledLink>
               </Li>

               <Li>
               <StyledLink to="/memberform">Log in</StyledLink>
               </Li>

              <Li>
              <Link to="/shoppingcart"><LogoCart src='/assets/shopping-bag.png' alt="Cart"></LogoCart></Link>
              <span>{totalPrice}:-</span>
              </Li>
              </Headerwrapper>

              {showmenu &&  <Burgermenu /> }



     </HeaderContainer>
   
   )


}


export const HeaderContainer = styled.div`
  
width: 100%;
  height: 75px;
  position: fixed;
  background-color: black;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1000;

`;

export const Headerwrapper = styled.div`
  
  display: flex;
  color: white;
  width: 100%;
  justify-content: center;
`;




const LogoWrapper = styled.div`

    display: flex;
    margin-left: 10%;

`;

const LogoWrapperMenu = styled.div`

 display: none;

 @media (max-width: 768px) {
  display: flex;


}

`

const Li = styled.div`
    display: inline-block;
    margin-right: 80px;
    font-size: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
      display: none;
    }
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
      background-color: lightblue;
    }
`;

