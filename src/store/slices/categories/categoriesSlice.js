import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categories.API";


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        changeActive: (state, { payload }) => {
            return [
                ...state.map(el => {
                    if(el.id === payload) {
                        return {
                            ...el,
                            active: !el.active
                        }
                    }
                    return el
                })
            ]
        }
    },
    extraReducers: {
        [fetchCategories.fulfilled]: (state, { payload }) => {
            return payload
        }
    }
})

export const { changeActive } = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

export const selectCategories = state => state.categories