import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//pages 
import { Home } from './pages/Home'
import { Donate } from './pages/Donate'


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

   </Switch>
   </BrowserRouter>
  )
}


