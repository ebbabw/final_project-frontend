import React, { useState  } from 'react'
import styled from 'styled-components/macro'

import { InputWrapper, FromHeader, FromInput} from '../lib/Form'

import { Button } from '../lib/Button'

export const SignUpForm = () => {

  
    const [signUpUser, setsignUpUser] = useState({
        name: '',
        email: '',
        password: ''
    })
  
    const [error, setError] = useState('')
  

      const handleSubmit = event => {
      event.preventDefault()

      fetch("https://ebba-final-project.herokuapp.com/members",
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(signUpUser)
  
        }
  
      ).then(res => {

        if (!res.ok) {
          throw new Error('Unable to sign up, please try again')
  
        }
        res.json()
      })
  
        .catch((err) => {
          setError(err.message)
        })
  
        .then(() => {
          setsignUpUser({
            name: '',
            email: '',
            password: ''
          })
        })
    }
  
      return (

          <div>

            <form onSubmit={handleSubmit}>
            
            <FromHeader>Become a member</FromHeader>
            
    
            <InputWrapper>
            <FromInput
            type="text"
            placeholder="Name"
            required
            value={signUpUser.name}
            onChange={event => setsignUpUser({ ...signUpUser, name: event.target.value })} 
            > 
  
            </FromInput>
           
            <FromInput
            type="email"
            placeholder="Email"
            required
            value={signUpUser.email}
            onChange={event => setsignUpUser({ ...signUpUser, email: event.target.value })} 
            >
  
            </FromInput>

            <FromInput
            type="password"
            placeholder="Password"
            minlength="8"
            required
            value={signUpUser.password}
            onChange={event => setsignUpUser({ ...signUpUser, password: event.target.value })} 
            >
  
            </FromInput>

            <OutlinedButton type="submit" value="Sign up" onClick={handleSubmit}>Sign up</OutlinedButton>
            {error && <p>{error}</p>}

            </InputWrapper>


            </form>
  
    
          </div>
  )}
  


  const OutlinedButton = styled(Button)`
  margin-top: 30px;
  margin-left: 20px;
  width: 200px;
  color: black;
  border-radius: 25px;
  background: ${props => props.background || "lightblue"};

  &:hover {
    background: ${props => props.background || "lightgray"};
  }
`;
