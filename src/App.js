import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//pages 
import { Home } from './pages/Home'
import { Donate } from './pages/Donate'
import { MemberForm } from './pages/MemberForm'
import { ProfilePage } from './pages/ProfilePage'
import { About } from './pages/About'




export const App = () => {
  return (
   <BrowserRouter>
    <Switch>

    <Route path="/" exact>
    <Home />
    </Route>

    <Route path="/donate" exact>
    <Donate />
    </Route>

    <Route path="/memberform" exact>
    <MemberForm />
    </Route>

    <Route path="/profilepage" exact>
    <ProfilePage /> 
    </Route>

    <Route path="/whatwedo" exact>
    <About /> 
    </Route>

   </Switch>
   </BrowserRouter>
  )
}


