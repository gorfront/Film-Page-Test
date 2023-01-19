import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCurrentProduct } from '../../store/slices/currentProduct/currentProductAPI'
import { selectCurrentProduct } from '../../store/slices/currentProduct/currentProductSlice'
import LikeUniq from '../LikeUniq/LikeUniq'
import ProductStars from '../ProductStars/ProductStars'
import BestFilms from '../BestFilms/BestFilms'

import './UniqItem.css'
import { fetchBestFilms } from '../../store/slices/bestFilms/bestFilmsAPI'

function UniqItem() {

  let count = new Date().getTime()

  const currentProduct = useSelector(selectCurrentProduct)
  const dispatch = useDispatch()

  const { id } = useParams()
  
  useEffect(() => {
    dispatch(fetchCurrentProduct(id))
  }, [id])
  
 


  return (
    <>
        <BestFilms />
      <div className='uniqItem'>
      <div className='uniqItem__head'>

        <div className='uniqItem__img'>
          <img src={currentProduct[0]?.img_small} />
          <ProductStars kp={currentProduct[0]?.kp} />
        </div>

        <div className='uniqItem__about'>
          <div className='uniqItem__about__div div1'>
            <h2>Name</h2>
            <p>{currentProduct[0]?.name}</p>
          </div>

          <div className='uniqItem__about__div div2'>
            <h2>Year</h2>
            <p>{currentProduct[0]?.year}</p>
          </div>

          <div className='uniqItem__about__div div3'>
            <h2>Country</h2>
            <p>{currentProduct[0]?.country}</p>
          </div>

          <div className='uniqItem__about__div'>
            <h2>Genres</h2>
            <div className='div4'>
              {
                currentProduct[0]?.genres?.map(genre => <p key={++count}>{genre}</p>)
              }
            </div>

          </div>

          <div className='uniqItem__about__div div5'>
            <h2>Time</h2>
            <p>
              {
                currentProduct[0]?.time_min + ' ' + 'min'
              }
            </p>
          </div>


          <div className='uniqItem__about__div div6'>

            <div className='film__staff'>
              <h2>Producer</h2>
              {
                currentProduct[0]?.producer?.map(el => <p key={++count}>{el}</p>)
              }
            </div>
            <div className='film__staff'>
              <h2>Actor</h2>
              {
                currentProduct[0]?.actor?.map(el => <p key={++count}>{el}</p>)
              }
            </div>

          </div>

          <div className='uniqItem__about__div div7'>
            <h2>{currentProduct[0]?.name}</h2>
            <p>{currentProduct[0]?.description}</p>
          </div>

        </div>
      </div>



      <div className='uniqItem__move'>
        <iframe className='uniqItem__move__video' src={`${currentProduct[0]?.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
      <div className='see__more'>
        <h2 className='see__more__title'>See More</h2>
        <LikeUniq />
      </div>
        
    </div>
    </>
  )
}

export default UniqItem