
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


export const ProductDetails = () => {

    const [ product, setProduct ] = useState()
    const { _id } = useParams()

    useEffect(() => {

        fetch(`https://ebba-final-project.herokuapp.com/product/${_id}`)
        .then((res) => res.json())
        .then((json) => setProduct(json))
    
    }, [_id])

    if (!product) {
        return <></>;
    }
    
    return (

        <article className="MoviePage">
        <Link to="/donate">
        <button>back to shop</button>
        </Link>
        {product && (

            <div>

            <h1>{product.name}</h1>
            <p>{product.description}</p>

            </div>
            
        )}

        </article>

    

    )


 }