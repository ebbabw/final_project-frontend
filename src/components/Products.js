import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

import styled from 'styled-components/macro'

export const Products = () => {


    const allProducts = useSelector((store) => store.products)

    return (

        <ShopContainer>
        <ShopWapper>
 

         {allProducts.map((product) =>(

            <Product key={product.id} product={product} />

         ))}

    
        </ShopWapper>
        </ShopContainer>

    )

}

const ShopContainer = styled.div`
  
  display: flex;
  margin-top: 175px;
  
`;

const ShopWapper = styled.div`
  
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`;

