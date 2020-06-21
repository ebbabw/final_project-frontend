
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Header } from '../lib/Header'
import { Button } from '../lib/Button'


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

        <ProductContainer>

        <Header />

        {product && (

            <div>

            <h1>{product.name}</h1>
            <p>{product.description}</p>

            </div>
            
        )}

        <div>
        <Link to="/donate">
        <Button>back to shop</Button>
        </Link>
        </div>


        </ProductContainer>



    

    )


 }

 const ProductContainer = styled.div`
  
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  
`;

