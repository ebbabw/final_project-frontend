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


// import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

// // components
// import { SignUpform } from './components/SignUpform'
// import { SignInform } from './components/SignInform'
// import {  SecretMessage } from './components/SecretMessage'

// // lib
// import { Card } from './lib/Card'
// import { Wrapper } from './lib/Wrapper'



// export const App = () => {
//   return (
    
//     <BrowserRouter>
//     <Switch>
//     <Card>
//     <Wrapper>

//     <Route path="/" exact>
//            <SignUpform />
//            <SignInform  /> 
//     </Route>

//     <Route path='/secretmessage'>
//           <SecretMessage />
//     </Route>

//     </Wrapper>
//     </Card>
//     </Switch>
//     </BrowserRouter>
//   )
// }


