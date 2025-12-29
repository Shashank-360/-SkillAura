import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const Navbar = () => {
    const { user, logout } = useContext(Auth)

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-indigo-600 font-semibold"
            : "text-gray-700 hover:text-indigo-600 transition"

    return (
        <nav className="bg-linear-to-r from-amber-50 via-rose-50 to-indigo-50 shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo & Branding */}
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pinimg.com/736x/27/62/86/27628691e5272941e4e163cae9311614.jpg"
                        alt="logo"
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-rose-400"
                    />

                    <div className="flex flex-col leading-tight">
                        <h1 className="text-xl font-bold text-indigo-700 tracking-wide">
                            SkillAura
                        </h1>
                        <span className="text-xs italic text-gray-500">
                            Where Skills Shape the Future
                        </span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 text-sm font-medium">
                    {user && (<NavLink to="/" className={linkClass}>
                        Courses
                    </NavLink>)}


                    {user?.role === 'admin' && (
                        <NavLink to="/add" className={linkClass}>
                            Add Course
                        </NavLink>
                    )}

                    {user && (<NavLink to="/cart" className={linkClass}>
                        Cart
                    </NavLink>
                    )}

                </div>

                {/* Auth Section */}
                <div className="flex items-center gap-4">

                    {!user && (
                        <NavLink
                            to="/login"
                            className="rounded-md border border-indigo-600 px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition"
                        >
                            Login
                        </NavLink>
                    )}

                    {!user && (
                        <NavLink
                            to="/signup"
                            className="rounded-md bg-linear-to-r from-rose-500 to-indigo-600 px-4 py-1.5 text-sm font-semibold text-white hover:from-rose-600 hover:to-indigo-700 transition"
                        >
                            Sign Up
                        </NavLink>
                    )}

                    {user && (
                        <>

                            {/* Logout Button */}
                            <button
                                onClick={logout}
                                className="rounded-md border border-rose-500 px-3 py-1.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition"
                            >
                                Logout
                            </button>

                            {/* Username Avatar */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-rose-500 text-sm font-bold text-white">
                                {user?.username?.charAt(0).toUpperCase()}
                            </div>
                        </>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default Navbar
