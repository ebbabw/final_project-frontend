import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'


export const products = createSlice({
    name: 'products',
    initialState: {
        product: []
    },

    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload.products
        }
    }
})

export const fetchProducts = () => {
    return(dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://ebba-final-project.herokuapp.com/products')
        .then((res) => res.json())
        .then((json)=> {
          dispatch(products.actions.setProduct({products: json}))
          dispatch(ui.actions.setLoading(false))
        })
    }
}


