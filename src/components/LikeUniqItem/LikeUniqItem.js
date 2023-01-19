import React from 'react'
import { useNavigate } from 'react-router'

import './LikeUniqItem.css'

function LikeUniqItem({ name, id, img_small }) {

  const navigate = useNavigate()

  return (
    <div className='likeItem' key={id} onClick={() => {
      navigate(`/film/${id}`);
      window.location.reload(true)
    }}>
        <img className='likeUniq__img' src={img_small} alt={name} />
        <h2 className='likeUniq__title'>{name}</h2>
    </div>
  )
}

export default LikeUniqItem