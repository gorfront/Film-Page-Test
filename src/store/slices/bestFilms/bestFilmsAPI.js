import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBestFilms = createAsyncThunk(
    'bestFilms/fetchBestFilms',
    async function() {
        const res = await axios.get('https://kinobd.ru/api/films')

        const initialData = res.data.data

        const data = initialData.filter(el => {
            if(el.rating_kp > 8.2) return el
        })

        return data
    }
)