import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

//components
import { Product } from '../components/Product'

//lib
import { Header } from '../lib/Header'

//redux store
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../reducers/products'


export const Products = () => {
  
  const listProducts = useSelector(store => store.products.product);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);


    return (

      <div>

        <Header />


        <ShopContainer>
        <ShopWapper>

            {listProducts.map((product) => (
                   
            <Product 
            key={product.name} 
            product={product} 
            />
            ))}

    
        </ShopWapper>
        </ShopContainer>

      </div>

    )

}

const ShopContainer = styled.div`
  
  display: flex;
  width: 100%;
  
`;

const ShopWapper = styled.div`
  
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`;

