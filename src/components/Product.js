import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

import styled from 'styled-components/macro'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

    return (

        <div>

           <ShopCard>
           <div>{product.name}</div>
           <div>{product.price}:-</div>

           <Button

           type="button"
           disabled={product.inventory === 0}
           onClick={() => dispatch(cart.actions.addItem(product))}>
           Add to cart
           </Button>
           
           </ShopCard>

        </div>

    )

}


const ShopCard = styled.div`
  
  display: flex;
  width: 400px;
  height: 400px;
  background-color: lightblue;
  margin-left: 20px; 
  margin-bottom: 20px; 

`;

const Button = styled.button`

  width: 80px;
  height: 40px;
`;
