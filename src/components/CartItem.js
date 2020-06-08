import React from 'react'


export const CartItem = ({ product }) => {


    return (

        <article>

          <p>{product.title}</p>

            <span>x{product.quantity}</span>
            <span>sum{product.price * product.quantity}:-</span>

            <button type="button" onClick={() => {}}></button>
            <button type="button" onClick={() => {}}></button>



        </article>
    )
}