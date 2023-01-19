import React from 'react'
import { NavbarItem } from '../NavbarItem/NavbarItem'
import NavbarItemCategories from '../NavbarItemCategories/NavbarItemCategories'


import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarItem />
      <NavbarItemCategories />
    </div>
  )
}
