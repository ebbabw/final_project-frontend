import React from 'react'

import { SignUpForm } from '../components/SignUpForm'
import { LogInForm } from '../components/LogInForm'

import styled from 'styled-components/macro'

import { Header } from '../lib/Header'

export const MemberForm = () => {

return (

  <div>
    
    <Header /> 
    
    <FormContainer>


        <FormBox>
        <SignUpForm />
        </FormBox>

        <FormBox>
        <LogInForm />
        </FormBox>
    
    </FormContainer>

    </div>

    )
}

const FormContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 100px;
  justify-content: center;

`;


const FormBox = styled.div`

  border-radius: 3%;
  background-image: url('/assets/water.jpg');
  background-size: cover;
  margin: 20px;
  width: 350px;
  height: 500px;

`;