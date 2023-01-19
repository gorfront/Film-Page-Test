import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function () {
        const data = [
            {
                id: 1,
                title: 'фэнтези',
                active: false,
            },
            {
                id: 2,
                title: 'мелодрама',
                active: false,
            },{
                id: 3,
                title: 'мультфильм',
                active: false,
            },{
                id: 4,
                title: 'комедия',
                active: false,
            },{
                id: 5,
                title: 'драма',
                active: false,
            },{
                id: 6,
                title: 'детектив',
                active: false,
            },
            {
                id: 7,
                title: 'спорт',
                active: false,
            },{
                id: 8,
                title: 'ужасы',
                active: false,
            },{
                id: 9,
                title: 'фильм-нуар',
                active: false,
            },{
                id: 10,
                title: 'семейный',
                active: false,
            },{
                id: 11,
                title: 'вестерн',
                active: false,
            },{
                id: 12,
                title: 'триллер',
                active: false,
            },{
                id: 13,
                title: 'аниме',
                active: false,
            },{
                id: 14,
                title: 'история',
                active: false,
            },{
                id: 15,
                title: 'криминал',
                active: false,
            },{
                id: 16,
                title: 'приключения',
                active: false,
            },{
                id: 17,
                title: 'биография',
                active: false,
            },{
                id: 18,
                title: 'военный',
                active: false,
            },
           ]

        return data

    }
)