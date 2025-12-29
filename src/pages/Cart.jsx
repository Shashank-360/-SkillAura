import { useContext } from 'react'
import { CartData } from '../context/CartContext'

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartData)

    if (cart.length === 0) {
        return (
            <h2 className="mt-20 text-center text-xl font-semibold text-gray-600">
                Your cart is empty 🛒
            </h2>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 px-6 py-10">
            <h2 className="mb-8 text-center text-3xl font-bold text-indigo-700">
                My Cart
            </h2>

            <div className="mx-auto max-w-5xl space-y-6">
                {cart.map(course => (
                    <div
                        key={course.id}
                        className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg sm:flex-row"
                    >
                        {/* Image */}
                        <img
                            src={course.course_image}
                            alt={course.cname}
                            className="h-32 w-full rounded-xl object-cover sm:w-48"
                        />

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {course.cname}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    By {course.course_author}
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-xl font-bold text-indigo-600">
                                    ₹{course.course_fee}
                                </p>

                                <button
                                    onClick={() => removeFromCart(course.id)}
                                    className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:from-red-600 hover:to-rose-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
