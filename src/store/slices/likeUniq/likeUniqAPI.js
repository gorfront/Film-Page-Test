import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchLikeUniq = createAsyncThunk(
    'likeUniq/getchLikeUniq',
    async function (genre, anotherID) {
        const res = await axios.get(`https://kinobd.ru/api/films`)
        const initialData = res.data.data.map(film => {
            return {
                name: film.name_original,
                img_small: film.small_poster,
                genres: film.genres.map(el => el.name_ru),
                id: film.id
            }
        })

        console.log(initialData);

        const data = initialData.filter(film => {
            if (film?.genres[0] === genre[0] && film?.genres[1] === genre[1] || film?.genres[2] === genre[2]) {
                return film
            }
            
            return
        })

        data.length = 4

        return data
    }
)