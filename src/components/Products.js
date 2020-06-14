import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

//components
import { Product } from './Product'

import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../reducers/products'

export const Products = () => {
  
  const listProducts = useSelector(store => store.products.product);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);


    return (

        <ShopContainer>
        <ShopWapper>


            {listProducts.map((product) => (
                   
            <Product 
            key={product._id} 
            product={product} 
            />
            ))}

    
        </ShopWapper>
        </ShopContainer>

    )

}

// export const DisplayProduct = props => {
//   const product = useSelector(state =>       
//     state.products[props.product_id]
//   );
//   return <div>{product.title}</div>
// }

// const header = useSelector(
//   state => ({
//     username: state.user.username,
//     notifications: state.notifications.length
//   });
// );

// {code.product && code.status === 1 && (
//   <Card
//     coverImage={code.product.image_url}
//     secondaryText={code.product.brands}>
//     <Text>
//       <Link a href={`https://world.openfoodfacts.org/product/${code.product.code}/`} target="_blank">More Details</Link>
//       <p>Origin: {code.product.origins}</p>
//       <p>Ingredients: {code.product.ingredients_text}</p>
//     </Text>
//     <FinalText>Thank you and have a healthy life!</FinalText>
//   </Card>
// )}

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
  background-color: lightyellow;

`;

