import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import styled from 'styled-components/macro'

//lib
import { Header } from '../lib/Header'


export const Cart = () => {

    const products = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) => (
        store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

    return (

    <div>

    < Header />
    
    <ShopContainer>
 
    <Cartlogo src={require('../assets/shopping-bag.png')} alt="Cart"></Cartlogo>
    <Total>Total: {totalPrice}:-</Total>

    <ul>
        {products.map((product) => (
            <CartItem key={product.name} product={product} />
        ))}
    </ul> 

    </ShopContainer>

    </div>

    )
}


export const ShopContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  width: 100%;
  height: 100px;
  background-color: lightblue;

`;

export const Cartlogo = styled.img`
  
  margin-top: 30px;
  margin-left: 30px;
  width: 30px;
  height: 30px;

`;

export const Total = styled.p`
  
  margin-top: 38px;
  margin-left: 10px;

`;



