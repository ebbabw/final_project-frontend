
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Redux tools
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//Redux store
import { cart } from './reducers/cart'
import { products } from './reducers/products'
import { ui } from './reducers/ui'

//pages 
import { Home } from './pages/Home'
import { MemberForm } from './pages/MemberForm'
import { CommunityPage } from './pages/CommunityPage'
import { About } from './pages/About'
import { ProductDetails } from 'pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Products } from './pages/Products'
import { AllMembers } from './pages/AllMembers'

//components
import { LoadingSpinner } from './components/LoadingSpinner'

const reducer = combineReducers({
  ui: ui.reducer,
  cart: cart.reducer,
  products: products.reducer
})

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({ reducer,  preloadedState })

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
   <BrowserRouter>
   <Provider store={store}>
    <Switch>

    <Route path="/" exact>
    <Home />
    </Route>

    <Route path="/donate" exact>
    <Products />
    <LoadingSpinner />
    </Route>

    <Route path="/shoppingcart" exact>
    <Cart />
    </Route>

    <Route path="/product/:_id" exact>
    <ProductDetails/> 
    </Route>

    <Route path="/memberform" exact>
    <MemberForm />
    </Route>

    <Route path="/profilepage" exact>
    <CommunityPage /> 
    </Route>

    <Route path="/whatwedo" exact>
    <About /> 
    </Route>

    <Route path="/allmembers" exact>
    <AllMembers />
    </Route>

   </Switch>
   </Provider>
   </BrowserRouter>
  )
}



