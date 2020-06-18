import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import styled from 'styled-components/macro'

export const Cart = () => {

    const products = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) => (
        store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

    return (

    <div>

    <HeaderContainer>
    <ShopHeader>Our products</ShopHeader>
    </HeaderContainer>
    
    <ShopContainer>

    <Total>Total: {totalPrice}:-</Total>

  
    <CartContiner>
    <ul>
        {products.map((product) => (
            <CartItem key={product._id} product={product} />
        ))}
    </ul>

    </CartContiner>

    </ShopContainer>

    </div>

    )
}

export const HeaderContainer = styled.div`
  
  display: flex;
  margin-top: 100px;
  justify-content: center;

`;

export const ShopHeader = styled.h1`
  
  font-size: 25px;

`;


export const ShopContainer = styled.div`
  
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  height: 100px;

`;

export const CartContiner = styled.div`
  
  z-index: 44;
  width: 200px;
  background-color: white;

`;


export const Total = styled.p`
  
  margin-top: 38px;
  margin-right: 40px;

`;



