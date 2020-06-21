import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import styled from 'styled-components/macro'

import { Button } from '../lib/Button'


export const CartItem = ({ product })=> {

    const dispatch = useDispatch()


    return (

        <div>
           
           <ItemContainer>
            <ItemBox>
            
            <Img src={product.image} alt={product.name}/>
            <Item>x{product.quantity}</Item>
            <Item>{product.name}</Item>
            <Item>{product.price * product.quantity}$</Item>

            <TextButton type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</TextButton>
            <TextButton type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</TextButton>
            
            </ItemBox>
            </ItemContainer>

        </div>

    )
}


const ItemContainer = styled.div`

    display: flex;
    justify-content: center;
    width: 100%;

`;

const ItemBox = styled.div`
    
    display: flex;
    margin: 10px;
    background-color: white;
    width: 70%;

`;

const Img = styled.img`
  width: 60px;
  height: 60px;

`;

const Item = styled.div`

    margin-left: 10px;
    margin-top: 15px;

`;


export const TextButton = styled(Button)`
  
  width: 30px;
  height: 30px;
  color: black;
  background: ${props => props.background || "white"};
  border: 2px solid black;

  &:hover {
   background: ${props => props.background || "lightblue"};
  }
`;
