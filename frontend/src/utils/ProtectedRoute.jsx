import React from 'react'
import {Navigate} from "react-router-dom"
const ProtectedRoute = ({children}) => {
    const islogin = sessionStorage.getItem('isLoggedIn');
    if(islogin){
        return <Navigate to='/home' replace />
    }
    return children
}

export default ProtectedRoute
