import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import styled from 'styled-components/macro'
import { Header } from '../lib/Header'

import { Button } from '../lib/Button'

export const Cart = () => {

    const products = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) => (
        store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

    return (

    <div>

    <Header />

    <HeaderContainer>
    <ShopHeader>Shopping cart</ShopHeader>
    </HeaderContainer>
  
    
    <div>
        {products.map((product) => (
            <CartItem key={product._id} product={product} />
        ))}

    </div>

    <TotalContiner>
    <p>Total:<span>{totalPrice}:-</span></p>
    </TotalContiner>

    <ButtonContiner>

     <OutlinedButton>Go to checkout</OutlinedButton>

   </ButtonContiner>


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


export const TotalContiner = styled.div`
  
  display: flex;
  margin-top: 100px;
  justify-content: center;

`;

export const ButtonContiner = styled.div`
  
  display: flex;
  margin-top: 10px;
  justify-content: center;

`;



const OutlinedButton = styled(Button)`
  width: 200px;
  color: black;
  background: ${props => props.background || "white"};
  border: 2px solid black;

  &:hover {
    background: ${props => props.background || "lightblue"};
  }
`;
