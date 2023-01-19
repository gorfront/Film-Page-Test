import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";


const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

// export const {} = productsSlice.actions

export const productsReducer = productsSlice.reducer

export const selectProduct = state => state.products