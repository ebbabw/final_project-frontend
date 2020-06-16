import React, { useState  } from 'react'


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
            <h1>Become a member</h1>
            
            <input
            type="text"
            placeholder="Name"
            required
            value={signUpUser.name}
            onChange={event => setsignUpUser({ ...signUpUser, name: event.target.value })} 
            > 
  
            </input>
           
            <input
            type="email"
            placeholder="Email"
            required
            value={signUpUser.email}
            onChange={event => setsignUpUser({ ...signUpUser, email: event.target.value })} 
            >
  
            </input>

            <input
            type="password"
            placeholder="Password"
            minlength="8"
            required
            value={signUpUser.password}
            onChange={event => setsignUpUser({ ...signUpUser, password: event.target.value })} 
            >
  
            </input>

            <input type="submit" value="Sign up" onClick={handleSubmit}></input>
            {error && <p>{error}</p>}

            </form>
  
    
          </div>
  )}
  