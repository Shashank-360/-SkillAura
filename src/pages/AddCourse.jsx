import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as randomId } from 'uuid'

const AddCourse = () => {
    const navigate = useNavigate()

    const [courseData, setCourseData] = useState({
        id: randomId(),
        cname: '',
        course_image: '',
        course_fee: '',
        course_duration: '',
        course_author: ''
    })

    const {
        cname,
        course_image,
        course_fee,
        course_duration,
        course_author
    } = courseData

    const handleChange = (e) => {
        const { name, value } = e.target
        setCourseData({ ...courseData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (course_image && cname) {
            const response = await axios.post(
                'http://localhost:8055/courses',
                courseData
            )

            if (response.status === 201) {
                toast.success("Course added successfully")
                navigate('/')
            }
        } else {
            toast.error("Add image and course name before submit")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 px-4">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            >
                {/* Heading */}
                <h2 className="mb-1 text-center text-3xl font-bold text-indigo-700">
                    Add New Course
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
                        onChange={handleChange}
                        placeholder="Enter course name"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Course Image */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Image URL
                    </label>
                    <input
                        type="url"
                        name="course_image"
                        value={course_image}
                        onChange={handleChange}
                        placeholder="Paste image URL"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Course Fee */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Fee
                    </label>
                    <input
                        type="text"
                        name="course_fee"
                        value={course_fee}
                        onChange={handleChange}
                        placeholder="Enter course fee"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Course Duration */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Duration
                    </label>
                    <input
                        type="text"
                        name="course_duration"
                        value={course_duration}
                        onChange={handleChange}
                        placeholder="e.g. 6 months"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Course Author */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">
                        Course Author
                    </label>
                    <input
                        type="text"
                        name="course_author"
                        value={course_author}
                        onChange={handleChange}
                        placeholder="Instructor name"
                        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-rose-500 to-indigo-600 py-2.5 font-semibold text-white transition hover:from-rose-600 hover:to-indigo-700"
                >
                    Add Course
                </button>
            </form>
        </div>
    )
}

export default AddCourse
