import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import styled from 'styled-components/macro'


export const CartItem = ({ product }) => {

    const dispatch = useDispatch()


    return (

        <div>
           

            
            <Img src={product.image} alt={product.name}/>
            <div>{product.name}</div>
            <span>x{product.quantity}</span>
            <span>{product.price * product.quantity}$</span>

            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>add</button>
            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>remove</button>
            


        </div>

    )
}

const Img = styled.img`
  width: 40px;
  height: 40px;

`;