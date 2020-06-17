import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import styled from 'styled-components/macro'


export const CartItem = ({ product }) => {

    const dispatch = useDispatch()


    return (

        <Article>

            <div>{product.name}</div>
            <span>x{product.quantity}</span>
            <span>{product.price * product.quantity}:-</span>

            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>


        </Article>
    )
}


export const Article = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 80px;
  width: 200px;
  background-color: white;

`;

