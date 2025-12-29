import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="mt-auto bg-gray-900 text-gray-200">
                <Footer />
            </footer>

        </div>
    )
}

export default Layout
