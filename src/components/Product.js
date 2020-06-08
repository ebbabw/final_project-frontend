import React from 'react'


export const Product = ({ product }) => {

    return (

        <article>

           <p>{Product.title}</p>
           <p>{product.price}:-</p>

           <button

           type="button"
           disabled={product.inventory === 0}
           onClick={() => { }}>
             Add to cart
           </button>
        </article>

    )

}