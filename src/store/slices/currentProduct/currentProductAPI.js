import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentProduct = createAsyncThunk(
    'currentProduct/fetchCurrentProduct',
    async function(id) {
        const res = await axios.get(`https://kinobd.ru/api/films/${id}`)
        const initialData = [res.data]

        const data = initialData.map(film => {
            return {
                name: film.name_original,
                country: film.countries.map(el => el.name_ru),
                img_big: film.big_poster,
                img_small: film.small_poster,
                genres: film.genres.map(el => el.name_ru),
                id: film.id,
                actor: film.persons.map(el => {
                    if (el.profession.profession_id === 'actor') {
                        return el.name_english
                    }
                }),
                director: film.persons.map(el => {
                    if (el.profession.profession_id === 'director') {
                        return el.name_english
                    }
                }),
                producer: film.persons.map(el => {
                    if (el.profession.profession_id === 'producer') {
                        return el.name_english
                    }
                }),
                dir_active: false,
                imdb: film.rating_imdb,
                kp: film.rating_kp,
                time_min: film.time_minutes,
                trailer: film.trailer,
                year: film.year,
                description: film.description,
                active: false,
            }
        })
        
        return data
    }
)