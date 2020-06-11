import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

//lib
import { ShopHeader } from '../lib/Header'


export const Cart = () => {

    const products = useSelector((store) => store.cart.items)

    const totalPrice = 0

    return (
    
    <ShopHeader>
 
    <span role="img" aria-label="cart">🛒</span>
    <div>Total: {totalPrice}:-</div>

    <ul>
        {products.map((product) => (
            <CartItem key={product.id} product={product} />

        ))}
    </ul> 

    </ShopHeader>

    )
}