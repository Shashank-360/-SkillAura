// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './pages/Layout'
// import CourseList from './pages/CourseList'
// import AddCourse from './pages/AddCourse'
// import Cart from './pages/Cart'
// import Course from './pages/Course'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'
// import ProtectedRoutes from './route/ProtectedRoutes'


// const App = () => {
//   let Myrouter = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           element: <ProtectedRoutes />,
//           children: [
//             {
//               path: '/',
//               element: <CourseList />
//             },
//             {
//               path: '/cart',
//               element: <Cart />
//             }
//           ]

//         },
//         {
//           path: '/add',
//           element: <AddCourse />
//         },
//         {
//           path: '/course',
//           element: <Course />
//         },
//         {
//           path: '/login',
//           element: <Login />
//         },
//         {
//           path: '/signup',
//           element: <SignUp />
//         }
//       ]
//     }
//   ])
//   return (
//     <div>
//       <RouterProvider router={Myrouter}></RouterProvider>
//     </div>
//   )
// }

// export default App

//================================================================================================================================

import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import CourseList from './pages/CourseList'
import UpdateCourse from './pages/UpdateCourse'
import AddCourse from './pages/AddCourse'
import Login from './pages/Login'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import ProtectedRoutes from './route/ProtectedRoutes'
const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <ProtectedRoutes>
            <CourseList />
          </ProtectedRoutes>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/cart',
          element: <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        },
        {
          path: '/update/:id', //Dynamic
          element: <UpdateCourse />
        },
        {
          path: '/add',
          element: <AddCourse />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  )
}

export default App

