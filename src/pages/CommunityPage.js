
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Lottie from 'lottie-react-web';
import animationData from '../lotties/community';

import { Button } from '../lib/Button'


 export const CommunityPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
      };

  const url = "https://ebba-final-project.herokuapp.com/memberpage"
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    history.push('/')
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')


    fetch(url, {
      method: 'GET',
      headers: { 'Authorization': accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw error('Access denied')
        }
        res.json()
      })
      .catch(err => {
        setError(err.message)
      })
  })

  if (localStorage.getItem('accessToken')) {

  return (

      <SecretSection>

        <ButtonContainer>
        <OutlinedButton onClick={handleSignOut}>Sign out</OutlinedButton>
        </ButtonContainer>

        <HeaderLoggedIn>Welcome to our Community</HeaderLoggedIn>
       

        <Lottie 
         options={defaultOptions} 
         height={250} 
         width={250}
        />

      <HeaderStart>Let's start the converation!</HeaderStart>

      <JoinContainer>
      <OutlinedButton>Join now</OutlinedButton>
      </JoinContainer>



   
    </SecretSection>
  )
}

}


const SecretSection = styled.section`
  
  margin-top: 40px;
  justify-content: center;
  width: 100%;

`;
  

const HeaderLoggedIn = styled.h1`
  
  margin-top: 10px;
  font-size: 50px;
  text-transform: uppercase;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;

  `;

const HeaderStart = styled.h3`
  
  margin-top: 10px;
  font-size: 20px;
  text-transform: uppercase;
  color: black;
  text-align: center;

  `;



 const ButtonContainer = styled.div`
  
  margin-top: 10px;
  margin-left: 20px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-start;
 
`;
  

const JoinContainer = styled.div`

  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;

`;

const OutlinedButton = styled(Button)`

 width: 200px;
 color: black;
 background: ${props => props.background || "white"};
 border: 2px solid black;

 &:hover {
  background: ${props => props.background || "lightblue"};
 }
`;


