import React from 'react'
import { products } from 'reducers/products'
import { CartItem } from './CartItem'
import { Product } from './Product'

export const Cart = () => {

    const totalPrice = 0

    return (
    
    <div>

    <span role="img" aria-label="cart">🛒</span>
    <p>Total: {totalPrice}</p>

    <ul>
        {products.map((product) => (
            <CartItem key={Product.id} product={product} />

        ))}
    </ul>

    </div>

    )
}
