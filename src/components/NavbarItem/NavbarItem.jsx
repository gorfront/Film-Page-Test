import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { image } from '../../images'
import { selecSearchtWord, setSearchWord } from '../../store/slices/searchWord/searchWordSlice'

import './NavbarItem.css'

export const NavbarItem = () => {

    const dispatch = useDispatch()
    const searchWord = useSelector(selecSearchtWord)

    return (
        <nav className='navbarItem'>
            <ul className='navbarItem__ul'>
                <li className='navbarItem__ul__li'>
                <NavLink to='/'>
                    <img src={image.film} alt="Logo" className='navbar__logo' />
                    <h2 className='navbar__logo__txt'>MOVE STORE</h2>
                </NavLink>
                </li>

                <li className='navbarItem__ul__li'>
                    <div className='navbar__search__div'>

                        <input   type="text"
                                 placeholder='Search...' className='navbar__inp'
                                 value={searchWord}
                                 onChange={(e) => dispatch(setSearchWord(e.target.value))}
                                 />
                    </div>
                </li>
            </ul>
        </nav>
    )
}
