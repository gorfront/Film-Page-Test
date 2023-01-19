import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
    name: 'pages',
    initialState: [
        {
            id: 1,
            page: 1,
            active: true,
        },
        {
            id: 2,
            page: 2,
            active: false,
        },{
            id: 3,
            page: 3,
            active: false,
        },{
            id: 4,
            page: 4,
            active: false,
        },
        {
            id: 5,
            page: 5,
            active: false,
        },
    ],
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
                    return {
                        ...el,
                        active: false,
                    }
                })
            ]
        }
    },
})

export const { changeActive } = pagesSlice.actions

export const pagesReducer = pagesSlice.reducer

export const selectPages = state => state.pages