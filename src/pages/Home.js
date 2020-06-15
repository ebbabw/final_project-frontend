import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'


//lib
import { Header } from 'lib/Header'
import { Logo } from 'lib/Logo'

//components
import { FullVideo } from '../components/FullVideo'

export const Home = () => {
   

    return (
    
    <div>

       <Header>

           <Ul>
               <Li>Home</Li>
               <Li>Our Members</Li>

                <Logo src={require('../assets/logocwg.png')}></Logo>

               <Li>
               <StyledLink to="/donate">Donate</StyledLink>
               </Li>
               <Li>What we do</Li>
           </Ul>
       
       </Header>

       <FullVideo />
       
    </div>

    )
}




const Ul = styled.p`
  display: flex;
  color: white;
  width: 100%;
  justify-content: center;
  margin-left: 42px;
`;

const Li = styled.li`
    font-size: 18px;
    display: inline-block;
    margin-top: 15px;
    margin-right: 100px;
    text-transform: uppercase;
    color: white;
    font-family: 'Roboto', sans-serif;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
      background-color: lightblue;
    }
`;
