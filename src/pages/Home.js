import React from 'react'
import styled from 'styled-components/macro'


//lib
import { Header } from 'lib/Header'
import { Logo } from 'lib/Logo'

export const Home = () => {
   

    return (
    
    <div>

       <Header>

           <Ul>
               <Li><Option>Home</Option></Li>
               <Li><Option>Our Members</Option></Li>
               <Logo src={require('../assets/logofinalproject_black.jpg')}></Logo>
               <Li><Option>Donate</Option></Li>
               <Li><Option>About</Option></Li>
           </Ul>s
       </Header>

        <h1>HOME PAGE</h1>

        

    </div>

    )
}




const Ul = styled.p`
  display: flex;
  color: white;
  justify-content: center;
`;

const Option = styled.p`
  color: white;
  font-size: 15px;
`;

const Li = styled.li`
    display: inline-block;
    font-size: 12px;
    padding: 10px;
    margin-top: 15px;
    margin-right: 100px;
    text-transform: uppercase;
    color: white;
    font-family: 'Roboto', sans-serif;
`;