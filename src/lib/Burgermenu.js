import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { LogoCart } from './Logos'
import { Logomenu } from './Logos'

export const Burgermenu = () => {

  const [showmenu, setShowmenu] = useState(true);

  const totalPrice = useSelector((store) => (
      store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))


  return (

      <HeaderContainer>   

            <Headermenu>

              <LogoWrapperMenu>
              <Logomenu src='/assets/menulogo.png' onClick={() => {setShowmenu(!showmenu)}}></Logomenu>
              </LogoWrapperMenu>

            </Headermenu>  

            {showmenu && 
            <Headerwrapper>

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
              <Price>
              <Link to="/shoppingcart"><LogoCart src='/assets/shopping-bag.png' alt="Cart"></LogoCart></Link>
              <span>{totalPrice}:-</span>
              </Price>
              </Li>
              </Headerwrapper>
              }

     </HeaderContainer>
   
   )


}


export const HeaderContainer = styled.div`

  @media (max-width: 768px) {
    width: 100%;
    height: 75px;
    position: fixed;
    background-color: black;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 1000;
    background-color: black;
  }
`;


export const Headermenu = styled.div`

  background-color: black;
  margin-left: 20px;

`;


const LogoWrapperMenu = styled.div`

    display: none;

    @media (max-width: 768px) {
      display: flex;
      width: 100%;
      justify-content: flex-start;

  }

`;

export const Headerwrapper = styled.div`


  @media (max-width: 768px) {
    width: 250px;
    height: 380px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 0.5s;
    background-color: black;
}

`;

const Li = styled.li`

    @media (max-width: 768px) {
      paddin-top: 30px;
      margin-left: 20px;
      margin-top: 20px;
      display: flex;
  }

`;



const Price = styled.span`
    
@media (max-width: 768px) {
    display: inline-block;
    margin-right: 90px;
  }

`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
      background-color: lightblue;
    }
`;



