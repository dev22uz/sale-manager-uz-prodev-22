// import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import useAdminAuth from '../../Auth/useAdminAuth'
// import Spiner from '../../Components/Spiner'

import AdminLayout from '../../Layout/Admin/AdminLayout'
import ProtectedAdminRoutes from './ProtectedAdminRoutes'

import Login from '../../Pages/Admin/Login'
import Dashboard from '../../Pages/Admin/Dashboard'

import Category from '../../Pages/Admin/Category'
import CategoryAdd from '../../Pages/Admin/CategoryAdd'



import Products from '../../Pages/Admin/Products'
import ProductAdd from '../../Pages/Admin/ProductAdd'
import ProductView from '../../Pages/Admin/ProductView'
import ProductEdit from '../../Pages/Admin/ProductEdit'


import Profile from '../../Pages/Admin/Profile'




const AdminRoutes = () => {

  useAdminAuth()

  return (
    <>
        {/* <Suspense fallback={ <Spiner /> } > */}
          <Routes>
              <Route path='/login' element={<Login />} />

              <Route element={<AdminLayout />} >

                  <Route element={<ProtectedAdminRoutes />} >
                      <Route path='/' element={<Navigate to={'/admin/dashboard'} />} />
                      <Route path='/dashboard' element={<Dashboard />} />
                      
                      <Route path='/category' element={<Category />} />
                      <Route path='/category/add' element={<CategoryAdd />} />
                    
                      <Route path='/books' element={<Products />} />
                      <Route path='/books/add' element={<ProductAdd />} />
                      <Route path='/books/:id' element={<ProductView />} />
                      <Route path='/books/:id/edit' element={<ProductEdit />} />
                     
                     
                      
                      
                      <Route path='/profile' element={<Profile />} />
                 
                  </Route>

              </Route>
          </Routes>
        {/* </Suspense> */}
    </>
  )
}

export default AdminRoutes