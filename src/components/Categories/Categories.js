import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/slices/categories/categories.API'
import { selectCategories } from '../../store/slices/categories/categoriesSlice'
import CategoriesItem from '../CategoriesItem/CategoriesItem'

import './Categories.css'

function Categories() {

    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!categories.length) {
            dispatch(fetchCategories())
        }
    }, [])

  return (
    <div className='categories'>
      {
        categories.map(category => <CategoriesItem key={category.id} {...category} />)
      }
    </div>
  )
}

export default Categories