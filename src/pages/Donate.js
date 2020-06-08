import React from 'react'

//Redux tools
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//Redux store
import { cart } from '../reducers/cart'
import { products } from '../reducers/products'

//components
import { Cart } from '../components/Cart'
import { Products } from '../components/Products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const Donate = () => {
  return (
   <Provider store={store}>

   <Cart />
   <Products />
   

   </Provider>
  )
}
