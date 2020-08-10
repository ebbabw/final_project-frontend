import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import styled from 'styled-components/macro'
import { Header } from '../lib/Header'
import swal from 'sweetalert';

import { Button } from '../lib/Button'

export const Cart = () => {

  const handleAlert = () => {
    window.swal();
    swal("Unfortunately, not a real store but if you want to donate please visit https://coralgardeners.org - This is a Technigo Bootcamp finalproject visit https://github.com/ebbabw/final_project-frontend and https://www.technigo.io/ to learn more.");
  }

    const products = useSelector((store) => store.cart.items)


    const totalPrice = useSelector((store) => (
        store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 1)
    ))


    const totalAmount = useSelector((store) => 
    store.cart.items.map(qty => {
      return qty.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0))


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
    <p>Amount:<span>{totalAmount}</span></p>
    </TotalContiner>

    <ButtonContiner>

     <OutlinedButton onClick={handleAlert}>Go to checkout</OutlinedButton>

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
