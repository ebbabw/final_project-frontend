import React from 'react'
import { Product } from './Product'

export const Products = () => {


    const allProducts = []

    return (

        <div>
         {allProducts.map((product) =>(

            <Product key={product.id} product={product} />

         ))}

        </div>

    )

}