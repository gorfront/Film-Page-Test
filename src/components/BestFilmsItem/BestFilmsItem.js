import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'


import './BestFilmsItem.css'

function BestFilmsItem({ id, name_original, small_poster }) {

  const navigate = useNavigate()

  return (
    <div className='bestFilm' key={id} onClick={() => {
      navigate(`/film/${id}`);
      window.location.reload(true)
    }}>
      <img src={small_poster} alt={name_original} className='bestFilm__img' />
      <h2 className='bestFilm__title'>{name_original.length > 26 ? name_original.slice(0, 20) + '...' : name_original}</h2>

    </div>
  )
}

export default BestFilmsItem