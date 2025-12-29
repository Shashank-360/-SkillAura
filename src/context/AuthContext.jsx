import React, { createContext, useState } from 'react'

export let Auth = createContext()
const AuthContext = ({ children }) => {
    let [user, setUser] = useState(() => {
        return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    })

    let login = (loginDetails) => {
        setUser(loginDetails)
        localStorage.setItem('user', JSON.stringify(loginDetails))
    }

    let logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }
    return (
        <Auth.Provider value={{ user, login, logout }}>{children}</Auth.Provider>
    )
}

export default AuthContext