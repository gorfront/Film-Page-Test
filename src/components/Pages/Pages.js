import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive, selectPages } from '../../store/slices/pages/PagesSlice'
import { fetchProducts } from '../../store/slices/product/productAPI'

import "./Pages.css"

function Pages() {

  const dispatch = useDispatch()
  const pages = useSelector(selectPages)

  return (
    <div className='pages'>
      {
        pages.map(el =>
            <p
              onClick={() => {
                dispatch(fetchProducts(el.page))
                dispatch(changeActive(el.id))
              }}
              className={el.active ? 'pageAct' : 'page'}
              key={el.id}>{el.page}</p>
        )
      }
    </div>
  )
}

export default Pages