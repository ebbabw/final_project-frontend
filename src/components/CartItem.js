import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'


export const CartItem = ({ product }) => {
    const dispatch = useDispatch()


    return (

        <article>

            <p>{product.name}</p>

            <span>x{product.quantity}</span>
            <span>{product.price * product.quantity}:-</span>

            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>




        </article>
    )
}