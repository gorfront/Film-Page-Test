import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar/Navbar'

function HomeWrapper() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default HomeWrapper