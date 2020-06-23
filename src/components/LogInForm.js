import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'


import { InputWrapper, FromHeader, FromInput} from '../lib/Form'

import { Button } from '../lib/Button'

export const LogInForm = () => {
  
    const [signInUser, setsignInUser] = useState({
      email: '',
      password: ''
    })
    const history = useHistory()
    const [error, setError] = useState('')
    
    const handleSubmit = event => {
    event.preventDefault()
    
    
    fetch("https://ebba-final-project.herokuapp.com/sessions",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(signInUser)
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error('Unable to sign in, please try again')
      }
      res.json().then(data => {
        if (data.notFound !== true) {
          localStorage.setItem('accessToken', data.accessToken)
          history.push('/profilepage')
        }
      })
    })
    .catch((err) => {
      setError(err.message)
    })
    .then(() => {
      setsignInUser({
        email: '',
        password: ''
      })
    })
    }

    return (

      <article>
  
        <form onSubmit={handleSubmit}>
       
        <FromHeader>Sign in</FromHeader>
  

       <InputWrapper>
        <FromInput
        type="email"
        placeholder="Email"
        required
        value={signInUser.email}
        onChange={event => setsignInUser({ ...signInUser, email: event.target.value })} 
        >
        </FromInput>
        
        <FromInput
        type="password"
        placeholder="Password"
        minlength="8"
        required
        value={signInUser.password}
        onChange={event => setsignInUser({ ...signInUser, password: event.target.value })} 
        >
        </FromInput>
  
        <OutlinedButton type="submit" value="Sign in" onClick={handleSubmit}>Sign in</OutlinedButton>
        {error && <p>{error}</p>}
        
        </InputWrapper>

        
        </form>
   
      
  
      </article>
  
  )
  }
  
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
