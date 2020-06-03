import { createSlice } from '@reduxjs/toolkit'

const productData = [

   { id: 1, title: 'stuffed Wale animal', price: 49 },
   { id: 2, title: 'Recyeld braslet', price: 149 },
   { id: 3, title: 'Recyeld bag', price: 349 }

]

export const products = createSlice({
    name: 'products',
    initialState: productData
})