import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentProduct } from '../../store/slices/currentProduct/currentProductSlice'
import { fetchLikeUniq } from '../../store/slices/likeUniq/likeUniqAPI'
import { selectLikeUniq } from '../../store/slices/likeUniq/likeUniqSlice'
import LikeUniqItem from '../LikeUniqItem/LikeUniqItem'

import './LikeUniq.css'

function LikeUniq() {

    const likeFilm = useSelector(selectLikeUniq)
    const dispatch = useDispatch()
    const currentProduct = useSelector(selectCurrentProduct)

    const genre = currentProduct[0]?.genres
    const anotherID = currentProduct[0]?.id
    console.log(genre);

    useEffect(() => {
        if (!likeFilm.length) {
            dispatch(fetchLikeUniq(genre, anotherID))
        }
    }, [currentProduct[0]?.id])

    return (
        <div className='likeUniq'>
           {
            likeFilm.map(film => <LikeUniqItem key={film.id} {...film} />)
           }
        </div>
    )
}

export default LikeUniq