import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
    const dispatch = useDispatch()

    return (

        <article>

           <h3>{Product.title}</h3>
           <p>{product.price}</p>

           <button

           type="button"
           disabled={product.inventory === 0}
           onClick={() => dispatch(cart.action.addIteam(product))}>
             Add to cart
           </button>
        </article>

    )

}