import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    let navigate = useNavigate()
    return (
        <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top Section */}
                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            SkillAura
                        </h2>
                        <p className="mt-3 text-sm text-gray-300">
                            Where Skills Shape the Future.
                            Learn, grow, and build your career with industry-ready courses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="inline-block transition duration-200 hover:text-white hover:translate-x-1"
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/add"
                                    className="inline-block transition duration-200 hover:text-white hover:translate-x-1"
                                >
                                    Add Course
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/cart"
                                    className="inline-block transition duration-200 hover:text-white hover:translate-x-1"
                                >
                                    Cart
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/login"
                                    className="inline-block transition duration-200 hover:text-white hover:translate-x-1"
                                >
                                    Login
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Stay Updated
                        </h3>
                        <p className="mb-3 text-sm text-gray-300">
                            Subscribe to get latest course updates.
                        </p>
                        <div className="flex overflow-hidden rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-sm text-gray-800 outline-none"
                            />
                            <button className="bg-emerald-500 px-4 text-sm font-semibold text-white hover:bg-emerald-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gray-600 opacity-40"></div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} SkillAura. All rights reserved.
                    </p>

                    <p className="text-gray-400">
                        Built with ❤️ by <span className="font-semibold text-white">Shanky</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
