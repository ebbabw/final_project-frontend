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

        <DoanteHeader>Web shop</DoanteHeader>

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
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  
`;

const DoanteHeader = styled.h2`
  
 margin-top: 100px;
 font-size: 50px;
 text-transform: uppercase;
 color: black;
 text-align: center;

`;


const ShopWapper = styled.div`
  
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`;

