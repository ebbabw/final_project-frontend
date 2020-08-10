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


  const totalAmount = useSelector((store) => 
  store.cart.items.map(qty => {
    return qty.quantity;
  })
  .reduce((a, b) => {
    return a + b;
  }, 0))

  return (


      <HeaderContainer>   

            <LogoWrapperMenu>
              <Logomenu src='/assets/menulogo.png' onClick={() => {setShowmenu(!showmenu)}}></Logomenu>
            </LogoWrapperMenu>
           
             <LogoWrapper>
              <Link to="/"><Logo src='/assets/logocwg.png'></Logo></Link>
              </LogoWrapper>

            <Headerwrapper>
              <Navwrapper>

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
              <Link to="/shoppingcart"><LogoCart src='/assets/shopping-bag.png' alt="Cart"></LogoCart></Link>
              <AmountContainer>
               <AmounttText>{totalAmount}</AmounttText>
              </AmountContainer>
              </Li>
              </Navwrapper>
              </Headerwrapper>

              {showmenu &&  <Burgermenu /> }



     </HeaderContainer>
   
   )


}


export const HeaderContainer = styled.div`
  
  display: flex;
  width: 100%;
  height: 75px;
  position: fixed;
  background-color: black;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1000;
  position: absolute;
 
`;

export const Headerwrapper = styled.div`
  
  display: flex;
  height: 75px;
  color: white;
  width: 100%;
  justify-content: flex-end;
  position: relative;
`;


const LogoWrapper = styled.div`

    display: block;
    margin-left: 20px;

`;

const LogoWrapperMenu = styled.div`

 display: none;

 @media (max-width: 768px) {
  display: flex;

}

`

const Navwrapper = styled.div`

  display: flex;
  justify-content: flex-end; 

`

const Li = styled.div`
    display: inline-block;
    width: 100px;
    align-item: right;
    margin-right: 10px;
    font-size: 15px;
    margin-top: 30px;

    @media (max-width: 768px) {
      display: none;
    }
`;

const AmountContainer = styled.div`
    
    display: inline-block;

`;

const AmounttText = styled.p`
    
    background-color: lightblue;
    color: black;
    width: 20px;
    height: 20px;
    padding: 2px;
    border-radius: 25px;
    text-align: center;
    

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
      background-color: lightblue;
    }
`;



