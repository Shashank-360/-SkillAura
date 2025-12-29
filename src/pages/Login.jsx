import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../context/AuthContext'
import Snowfall from 'react-snowfall'


const Login = () => {
    let { login, logout } = useContext(Auth)
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
        role: ''
    })

    const { email, password, role } = data

    const handleonChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email.trim() && password.trim() && role.trim()) {
            let alreadyExist = await axios.get(
                `http://localhost:8055/users?email=${email}&password=${password}&role=${role}`
            )

            if (alreadyExist.data[0]) {
                login(alreadyExist.data[0])
                toast.success("Login Successfull")
                navigate('/')
            } else {
                toast.error("Please SignUp before login")
            }
        } else {
            toast.error("Please fill all fields")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-amber-50 via-rose-50 to-indigo-50 px-4">
            <Snowfall color='#82C3D9' />
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            >
                {/* Branding */}
                <h2 className="mb-1 text-center text-3xl font-bold text-indigo-700 tracking-wide">
                    SkillAura
                </h2>
                <p className="mb-6 text-center text-sm text-gray-500 italic">
                    Where Skills Shape the Future
                </p>

                {/* Email */}
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleonChange}
                        placeholder="Enter email"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleonChange}
                        placeholder="Enter password"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Role Selection */}
                <div className="mb-6">
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Login as
                    </p>

                    <div className="flex gap-6">
                        <label className="flex cursor-pointer items-center gap-2">
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                onChange={handleonChange}
                                className="accent-indigo-600"
                            />
                            <span className="text-sm text-gray-700">User</span>
                        </label>

                        <label className="flex cursor-pointer items-center gap-2">
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                onChange={handleonChange}
                                className="accent-rose-600"
                            />
                            <span className="text-sm text-gray-700">Admin</span>
                        </label>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-linear-to-r from-rose-500 to-indigo-600 py-2.5 font-semibold text-white transition hover:from-rose-600 hover:to-indigo-700"
                >
                    Login
                </button>

                {/* Signup Redirect */}
                <p className="mt-5 text-center text-sm text-gray-500">
                    Don&apos;t have an account?
                    <span
                        onClick={() => navigate('/signup')}
                        className="ml-1 cursor-pointer font-medium text-indigo-600 hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login
