import { createSlice } from "@reduxjs/toolkit";
import { fetchBestFilms } from "./bestFilmsAPI";

const bestFilmsSlice = createSlice({
    name: 'bestFilms',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchBestFilms.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

// export const {  } = bestFilmsSlice.actions

export const bestFilmsReducer = bestFilmsSlice.reducer

export const selectbestFilms = state => state.bestFilms