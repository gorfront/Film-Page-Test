import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentProduct } from "./currentProductAPI";

export const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchCurrentProduct.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

export const currentProductReducer = currentProductSlice.reducer

// export const {} = currentProductSlice.actions

export const selectCurrentProduct = state => state.currentProduct