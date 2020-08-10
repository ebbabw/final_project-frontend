import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { Link } from 'react-router-dom';

import { Button } from '../lib/Button'

import styled from 'styled-components/macro'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

    return (

        <div>

          <ShopCard>
          <HoverEffect>
          <InnerFlipedCard>

          <FlipcardFrontandBack>
          <FlipcardFront>
          
           <Title>{product.name}</Title>
           <Img src={product.image} alt={product.name}/>

          <ActionContainer>
           <Pricetitle>{product.price}$</Pricetitle>
           </ActionContainer>
           
           </FlipcardFront>
           </FlipcardFrontandBack>

           <FlipcardFrontandBack>
              
           <FlipcardBack>

            
            <Title>{product.name}</Title>
            <Img src={product.image} alt={product.name}/>

            <ButtonWrapper>
            <ProductLink key={product._id} to={`/product/${product._id}`}>
            <OutlinedButton>View more</OutlinedButton>
           </ProductLink>

            <OutlinedButton
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>
              Add to cart
            </OutlinedButton>
            </ButtonWrapper>

            <ActionContainer>
            <Pricetitle>{product.price}$</Pricetitle>
            </ActionContainer>

           </FlipcardBack>

           </FlipcardFrontandBack>

           </InnerFlipedCard>
           </HoverEffect>
           </ShopCard>

        </div>

    )

}


const ProductLink = styled(Link)`
    
    text-decoration: none;
    color: white;

`;

const ShopCard = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 450px;
  margin-left: 20px; 
  margin-bottom: 20px; 
  background: #f5f5f5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
  border-radius: 5px;
  padding: 25px;
  background-color: black;

  @media (max-width: 768px) {
    width: 400px;
    height: 350px;
  }

`;

const InnerFlipedCard = styled.div`
  
  position: relative;
  transition: all 2s ease;

  width: 300px;
  height: 450px;

  @media (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
 
`;


const FlipcardFrontandBack = styled.div`
  
  position: absolute;
  width: 100%;
  height: 100%;

`;


const FlipcardFront = styled.div`
  
  background-color: black;
  color: white;
   

`;

const FlipcardBack = styled.div`
  
  position: relative; 
  transform: rotateY(180deg);
  background-color: black;
  color: white;
  display: none;


`;



const HoverEffect = styled.div`
 
&:hover {
  transform: rotateY(180deg);

${FlipcardFront} {
  display: none;
}

${FlipcardBack} {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
 
}

`;

const Title = styled.h1`

   font-size: 20px;
   width: 100%;
   text-align: center;
   height: 40px;
   color: white;
`

const Img = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
  position: relative; 

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
}
`;


const ButtonWrapper = styled.div`
  
  display: flex;
  width: 100%;
  height: 100%;
  
  position: absolute; 
  left: 30px;
  top: 290px; 


`;


const ActionContainer = styled.h1`

  display: flex;
  justify-content: space-between;
  width: 100%;


`

const Pricetitle = styled.h1`

  color: black;
  font-size: 22px;
  font-weight: 900;
  padding-top: 10px;
  margin-top: 4px;
  color: white;

`

const OutlinedButton = styled(Button)`
  width: 100px;
  cursor: pointer;
  font-size: 10px;
  color: black;
  background: ${props => props.background || "white"};
  border: 2px solid black;

  &:hover {
    background: ${props => props.background || "lightblue"};
  }
`;




