import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import styled from 'styled-components/macro'

export const Cart = () => {
  
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)

    const products = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) => (
        store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

    return (

    <div>
    
    <ShopContainer>
 
    <Cartlogo onClick={onClick} src='../assets/shopping-bag.png' alt="Cart"></Cartlogo>
    <Total>Total: {totalPrice}:-</Total>

    { showResults ?
    <CartContiner>
    <ul>
        {products.map((product) => (
            <CartItem key={product._id} product={product} />
        ))}
    </ul>

    </CartContiner>
    : null }

    </ShopContainer>

    </div>

    )
}


export const ShopContainer = styled.div`
  
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  height: 100px;
  background-color: lightblue;

`;

export const CartContiner = styled.div`
  
  display: flex;
  z-index: 44;
  width: 200px;
  background-color: white;

`;

export const Cartlogo = styled.img`

  
  margin-top: 30px;
  margin-right: 20px;
  width: 30px;
  height: 30px;

`;

export const Total = styled.p`
  
  margin-top: 38px;
  margin-right: 40px;

`;



