import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import useCoustomerAuth from '../../Auth/useCoustomerAuth'
import FrontendMainLayout from '../../Layout/Frontend/FrontendMainLayout'
import ProductPageLayout from '../../Layout/Frontend/ProductPageLayout'

import Login from '../../Pages/Admin/Login'
import Home from '../../Pages/Frontend/Home'


import Products from '../../Pages/Frontend/Products'
import ProductSingle from '../../Pages/Frontend/ProductSingle'
import Profile from '../../Pages/Frontend/Profile'

import SignUp from '../../Pages/Frontend/SignUp'
import ProtectedFrontEndRoutes from './ProtectedFrontEndRoutes'

const FrontendRoutes = () => {

  useCoustomerAuth()

  return (
    <>
      

      <Routes>
        <Route element={<FrontendMainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route element={<ProductPageLayout />} >
            <Route path='/books' element={<Navigate to={'/books/all'} />} />
            <Route path='/books/:category' element={<Products />} />
          </Route>

          <Route path='/books/:category/:id' element={<ProductSingle />} />
        

          <Route element={<ProtectedFrontEndRoutes />}>
            <Route path='/profile' element={<Profile />} />

            
          </Route>

        </Route>
      </Routes>
        
    </>
  )
}

export default FrontendRoutes