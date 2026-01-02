import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCourse = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [updateData, setUpdateData] = useState()

    const {
        cname,
        course_image,
        course_fee,
        course_duration,
        course_author
    } = updateData

    useEffect(() => {
        let getDataToUpdate = async () => {
            let res = await axios.get(`http://localhost:8055/courses/${id}`)
            setUpdateData(res.data)
        }
        getDataToUpdate()
    }, [])

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUpdateData({ ...updateData, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if (
            !cname ||
            !course_image
        ) {
            toast.error("Please fill all fields")
            return
        }

        try {
            const update = await axios.put(
                `http://localhost:8055/courses/${id}`,
                updateData
            )

            if (update.status === 200) {
                toast.success("Course updated successfully")
                navigate('/')
            }
        } catch (err) {
            toast.error("Update failed")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 px-4">

            <form
                onSubmit={handleOnSubmit}
                className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            >
                {/* Heading */}
                <h2 className="mb-1 text-center text-3xl font-bold text-indigo-700">
                    Update Course
                </h2>
                <p className="mb-6 text-center text-sm text-gray-500 italic">
                    SkillAura — Where Skills Shape the Future
                </p>

                {/* Course Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Name
                    </label>
                    <input
                        type="text"
                        name="cname"
                        value={cname}
                        onChange={handleOnChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Image */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Image URL
                    </label>
                    <input
                        type="url"
                        name="course_image"
                        value={course_image}
                        onChange={handleOnChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Fee */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Fee
                    </label>
                    <input
                        type="number"
                        name="course_fee"
                        value={course_fee}
                        onChange={handleOnChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Duration
                    </label>
                    <input
                        type="text"
                        name="course_duration"
                        value={course_duration}
                        onChange={handleOnChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Author */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Author
                    </label>
                    <input
                        type="text"
                        name="course_author"
                        value={course_author}
                        onChange={handleOnChange}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-rose-500 to-indigo-600 py-2.5 font-semibold text-white hover:from-rose-600 hover:to-indigo-700 transition"
                >
                    Update Course
                </button>
            </form>
        </div>
    )
}

export default UpdateCourse
