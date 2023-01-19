import { createSlice } from "@reduxjs/toolkit";

export const searchWordSlice = createSlice({
    name: 'searchWord',
    initialState: '',
    reducers: {
        setSearchWord: (state, {payload}) => {
            return payload
        }
    }
})


export const searchWordReducer = searchWordSlice.reducer

export const { setSearchWord } = searchWordSlice.actions

export const selecSearchtWord = state => state.searchWord