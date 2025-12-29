import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Course from './Course'

const CourseList = () => {
    const [courseData, setCourseData] = useState([])

    const getCourseData = async () => {
        const res = await axios.get('http://localhost:8055/courses')
        console.log(res.data)
        setCourseData(res.data)
    }

    let onDelete = (id) => {
        axios.delete(`http://localhost:8055/courses/${id}`)
        setCourseData(prev => prev.filter(Course => Course.id !== id))
    }

    useEffect(() => {
        getCourseData()
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 px-6 py-10">

            {/* Page Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold text-indigo-700">
                    Explore Courses
                </h2>
                <p className="mt-2 text-gray-600">
                    Learn new skills and shape your future with SkillAura
                </p>
            </div>

            {/* Course Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {courseData.map((el) => (
                    <Course {...el} key={el.id} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default CourseList
