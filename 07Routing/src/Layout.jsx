import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

import { Outlet } from 'react-router-dom'

// outlet me chize change kar skte hai header ffot same rahega 
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>   
    <Footer/>

    </>
  )
}

export default Layout
