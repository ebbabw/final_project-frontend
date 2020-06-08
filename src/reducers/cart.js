import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.item.push({ ...action.payload, quantity: 1  })
            }
        }
    }

})