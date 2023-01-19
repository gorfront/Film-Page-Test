import React from 'react'
import { useDispatch } from 'react-redux'
import { changeActive } from '../../store/slices/categories/categoriesSlice'

import './CategoriesItem.css'

function CategoriesItem({ id, title, active }) {

    const dispatch = useDispatch()

    return (
        <p
            onClick={() => dispatch(changeActive(id))}
            className={active ? 'categoryAct' : 'category'}
            key={id}
        >
            {title}
        </p>
  )
}

export default CategoriesItem