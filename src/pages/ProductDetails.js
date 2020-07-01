
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { Header } from '../lib/Header'
import { Button } from '../lib/Button'

import { cart } from '../reducers/cart'


export const ProductDetails = () => {
  const dispatch = useDispatch()

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

      <div>

        <Header />

        <ButtonContainer>
        <ButtonWrapper>

        <Link to="/donate">
        <OutlinedButton>back to shop</OutlinedButton>
        </Link>

        <OutlinedButton
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>
              Add to cart
        </OutlinedButton>

                
        </ButtonWrapper>
        </ButtonContainer>

        <ProductContainer>

        {product && (

            <div>

            <DetailContainer>
            <Title>{product.name} {product.price}$</Title>
            <Img src={product.image} alt={product.name}></Img>
            <p>{product.description}</p>
            </DetailContainer>

            </div>
            
        )}

        </ProductContainer>

        </div>
    )


 }

 const ButtonContainer = styled.div`
  
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;


  @media (max-width: 768px) {
    
    flex-direction: column;
  

  }

  
`;

const ButtonWrapper = styled.div`
  
  display: flex;
  width: 50%;
  justify-content: space-between;
  border-bottom: solid black 1px;
  padding: 10px;

  @media (max-width: 768px) {
    
    flex-direction: column;
    width: 100%;
    justify-content: center;

  }

`;


const OutlinedButton = styled(Button)`
  
  width: 200px;
  color: black;
  background: ${props => props.background || "lightblue"};
  border: 2px solid black;

  &:hover {
  background: ${props => props.background || "white"};
}
`;


const ProductContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 5px;

  @media (max-width: 768px) {
    
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-left: 10px;

  }

`;

const DetailContainer = styled.div`
  
  width: 500px;
  width: 100%;

`;


const Title = styled.h1`

  font-size: 40px;
  color: black;


`;

const Img = styled.img`
  
  width: 500px;
  height: auto;
  object-fit: cover;
  box-shadow: 7px 7px;
  background-color: rgba(235, 227, 227, 0.468);
  border: 1px solid black;

  @media (max-width: 768px) {
    
    background-color: red;
    width: 300px;

  }


`;





