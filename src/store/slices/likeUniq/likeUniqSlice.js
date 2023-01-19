import { createSlice } from "@reduxjs/toolkit";
import { fetchLikeUniq } from "./likeUniqAPI";

const likeUniqSlice = createSlice({
    name: 'likeUniq',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchLikeUniq.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

// export const {  } = likeUniqSlice.actions

export const likeUniqReducer = likeUniqSlice.reducer

export const selectLikeUniq = state => state.likeUniq