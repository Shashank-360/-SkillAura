import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Auth } from '../context/AuthContext';
import { CartData } from '../context/CartContext';

const Course = (props) => {
    let {
        id,
        course_image,
        cname,
        course_author,
        course_duration,
        course_fee,
        onDelete
    } = props;

    let { user } = useContext(Auth)
    let navigate = useNavigate()
    let { addToCart } = useContext(CartData)

    return (
        <div className="group flex w-72 flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Course Image */}
            <div className="h-44 overflow-hidden">
                <img
                    src={course_image}
                    alt={cname}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-800">
                    {cname}
                </h3>

                <p className="text-sm text-gray-500">
                    By <span className="font-medium text-gray-700">{course_author}</span>
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    Duration: {course_duration}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xl font-bold text-indigo-600">
                        ₹{course_fee}
                    </span>

                    {user?.role === 'admin' ? (
                        <div className="flex items-center gap-2">
                            <NavLink
                                to={`/update/${id}`}
                                className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-600 hover:to-teal-700 hover:shadow-md"
                            >
                                Update
                            </NavLink>

                            <button
                                onClick={() => onDelete(id)}
                                className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-red-600 hover:to-rose-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                Delete
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            {/* View Button */}
                            <button className="rounded-lg bg-gradient-to-r from-rose-500 to-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition hover:from-rose-600 hover:to-indigo-700 hover:shadow-md">
                                View
                            </button>

                            {/* Add to Cart Button */}
                            <button
                                onClick={() => {
                                    addToCart(props)
                                    navigate('/cart')
                                }}
                                className="rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-600 hover:to-green-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                Add to Cart
                            </button>
                        </div>

                    )}

                </div>

            </div>
        </div>
    )
}


export default Course
