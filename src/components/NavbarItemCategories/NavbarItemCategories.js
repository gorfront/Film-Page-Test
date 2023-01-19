import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/slices/categories/categories.API'
import { changeActive, selectCategories } from '../../store/slices/categories/categoriesSlice'

import './NavbarItemCategories.css'


function NavbarItemCategories() {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)

    useEffect(() => {
        if (!categories.length) {
            dispatch(fetchCategories())
        }
    }, [])

    return (
        <div className='nav_categories'>
                <button type='button' className='nav__box' >
                    <span className='nav__box__line'></span>
                    <span className='nav__box__line'></span>
                    <span className='nav__box__line'></span>
                </button>
            <div className='categories__list'>
            {
                categories.map(category =>
                    <p
                        onClick={() => dispatch(changeActive(category.id))}
                        className={category.active ? 'categoriesAct__p' : 'categories__p'}
                        key={category.id}
                    >
                        {category.title}
                    </p>
                )
            }
            </div>

        </div>
    )
}

export default NavbarItemCategories