import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


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
       
        <h1>Sign in</h1>
  
        <input
        type="email"
        placeholder="Email"
        required
        value={signInUser.email}
        onChange={event => setsignInUser({ ...signInUser, email: event.target.value })} 
        >
        </input>
        <input
        type="password"
        placeholder="Password"
        minlength="8"
        required
        value={signInUser.password}
        onChange={event => setsignInUser({ ...signInUser, password: event.target.value })} 
        >
        </input>
  
        <input type="submit" value="Sign in"></input>
        {error && <p>{error}</p>}
        </form>
   
      
  
      </article>
  
  )
  }
  