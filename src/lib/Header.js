import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

import { Logo } from './Logos'
import { LogoCart } from './Logos'

export const Header = () => {


  return (

      <HeaderContainer>

            <Headerwrapper>
            

              <Link to="/"><Logo src='/assets/logocwg.png'></Logo></Link>
             

               <Li>
               <StyledLink to="/">Home</StyledLink>
               </Li>

               <Li>
               <StyledLink to="/donate">Donate</StyledLink>
               </Li>
               
               <Li>
               <StyledLink to="/whatwedo">What we do</StyledLink>
               </Li>

               <Li>Our Members</Li>


              <Li>
                <Link to="/shoppingcart"><LogoCart src='/assets/shopping-bag.png' alt="Cart"></LogoCart></Link>
              </Li>

              </Headerwrapper>

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

const Li = styled.div`

    display: inline-block;
    margin-right: 80px;
    font-size: 20px;
    margin-top: 20px;

`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
      background-color: lightblue;
    }
`;



