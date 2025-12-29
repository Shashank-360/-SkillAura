import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import { v4 as randomId } from 'uuid'

const SignUp = () => {
    const navigate = useNavigate()

    let [userdata, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmepassword: '',
        role: 'user',
        id: randomId()
    })

    let { username, email, password, confirmepassword } = userdata

    let handleChange = (e) => {
        let { name, value } = e.target
        setUserData({ ...userdata, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        if (
            username.trim() &&
            email.includes('@gmail.com') &&
            password.trim().length > 5 &&
            confirmepassword.trim()
        ) {

            let alreadyExist = await axios.get(`http://localhost:8055/users?email=${email}`)
            console.log(alreadyExist?.data);

            if (alreadyExist?.data.length > 0) {
                toast.error("Your account is already exist")
                return;
            }
            if (confirmepassword != password) {
                toast.error("Password not matching")
                return;
            }

            let res = await axios.post(
                "http://localhost:8055/users",
                userdata
            )

            if (res.status === 201) {
                navigate('/login')
            }
        }
        else {
            toast.error('please fill all fileds')
            return;
        }


        setUserData({
            username: '',
            email: '',
            password: '',
            confirmepassword: '',
            id: randomId()
        })
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-amber-50 via-rose-50 to-indigo-50 px-4">
            <Snowfall color='#82C3D9' />
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            >
                {/* Heading */}
                <h2 className="mb-1 text-center text-3xl font-bold text-indigo-700">
                    SkillAura
                </h2>
                <p className="mb-6 text-center text-sm text-gray-500">
                    Where Skills Shape the Future
                </p>

                {/* Username */}
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter username"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter password"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmepassword"
                        value={confirmepassword}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        placeholder="Confirm password"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-linear-to-r from-rose-500 to-indigo-600 py-2 font-semibold text-white hover:from-rose-600 hover:to-indigo-700 transition"
                >
                    Sign Up
                </button>

                {/* Footer text */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account?
                    <span
                        onClick={() => navigate('/login')}
                        className="ml-1 cursor-pointer text-indigo-600 hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    )
}

export default SignUp
