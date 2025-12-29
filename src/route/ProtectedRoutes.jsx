import React, { Children, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(Auth)

    // Optional: show loading while auth is resolving
    if (loading) {
        return <h1 className="text-center mt-20">Checking authentication...</h1>
    }

    // If NOT logged in → redirect
    if (!user) {
        return <Navigate to="/login" replace />
    }

    // If logged in → allow route
    return children
}

export default ProtectedRoutes
