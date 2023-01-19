import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestFilms } from '../../store/slices/bestFilms/bestFilmsAPI'
import { selectbestFilms } from '../../store/slices/bestFilms/bestFilmsSlice'
import BestFilmsItem from '../BestFilmsItem/BestFilmsItem'

import './BestFilms.css'

function BestFilms() {

    const bestFilms = useSelector(selectbestFilms)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!bestFilms.length) {
            dispatch(fetchBestFilms())
        }
    }, [])

  return (
        <div className='bestFilms'>
            {
                bestFilms.map(film => <BestFilmsItem key={film.id} {...film} />)
            }
        </div>
  )
}

export default BestFilms