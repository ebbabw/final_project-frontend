import React from 'react'

import { SignUpForm } from '../components/SignUpForm'
import { LogInForm } from '../components/LogInForm'

import styled from 'styled-components/macro'

import { Header } from '../lib/Header'

export const MemberForm = () => {

return (
    
    <FormContainer>
        <Header /> 

        <FormBox>
        <SignUpForm />
        </FormBox>

        <FormBox>
        <LogInForm />
        </FormBox>

    </FormContainer>

    )
}



const FormContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  background-color: green;

`;


const FormBox = styled.div`

  width: 400px;
  height: 600px;
  margin: 20px;

  background-color: red;
  

`;