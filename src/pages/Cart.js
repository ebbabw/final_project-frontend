import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import styled from 'styled-components/macro'
import { Header } from '../lib/Header'

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
    


    {/* {totalPrice.length === 0 && (
      <p>No itmes in the cart</p>
    )}  */}

    {/* if totalprice === 0 retun text (no items in the cart and remove if price) */}
  
    
  
    
    <div>

        {products.map((product) => (
            <CartItem key={product._id} product={product} />
        ))}

    </div>

    <Total>Total: {totalPrice}:-</Total>

    </div>

    )
}

export const HeaderContainer = styled.div`
  
  display: flex;
  margin-top: 100px;
  justify-content: center;
  background-color: yellow;

`;

export const ShopHeader = styled.h1`
  
  font-size: 25px;

`;

export const Total = styled.p`
  
  margin-top: 38px;

`;



