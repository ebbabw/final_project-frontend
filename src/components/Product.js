import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

import styled from 'styled-components/macro'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

    return (

        <div>

           <ShopCard>
            
           <Img src={product.image} alt={product.name}/>

           <Title>{product.name}</Title>
           <Pricetitle>{product.price}$</Pricetitle>
           <Subtitle>{product.description}</Subtitle>

           <Button
           
           type="button"
           onClick={() => dispatch(cart.actions.addItem(product))}>
           Add to cart
           </Button>

           </ShopCard>

        </div>

    )

}


const ShopCard = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 550px;
  margin-left: 20px; 
  margin-bottom: 20px; 
  background-color: orange;

`;


const Img= styled.img`
  width: 380px;
  height: 350px;
`;

const Title = styled.h1`

   font-size: 25px;
   width: 100%;
   height: 100px;
   text-align: center;
`

const Pricetitle = styled.h1`

   font-size: 20px;
   margin-botton: 10px;
   margin-left: 10px;
   text-align: left;

`

const Subtitle = styled.h1`

   font-size: 15px;
   width: 90%;
   height: 200px;
   margin-botton: 15px;
   margin-left: 10px;

`


const Button = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 10px;
  margin-botton. 10px;
`;



