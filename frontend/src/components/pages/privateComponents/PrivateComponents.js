// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom' 


const PrivateComponents = () => {
  
  let auth = {};
  if (localStorage.getItem('user')) {
    auth = JSON.parse(localStorage.getItem('user'));
    // console.log("Privatecomponents: ", auth)
  }
  return auth.user === 'seller' ? <Outlet /> : <Navigate to='/' /> 
}

export default PrivateComponents