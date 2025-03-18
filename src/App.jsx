import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Forgetpass from './Modules/AuthenticationModule/Components/ForgetPass/Forgetpass'
import Login from './Modules/AuthenticationModule/Components/Login/Login'
import Home from './Modules/Dashboard/Pages/Home'
import AboutUs from './Modules/GuideModule/Components/AboutUs/AboutUs'
import CallUs from './Modules/GuideModule/Components/CallUs/CallUs'
import Edusystem from './Modules/GuideModule/Components/EduSystem/Edusystem'
import Guide from './Modules/GuideModule/Components/Guide'
import AuthLayout from './Modules/SharedModule/Components/AuthLayout/AuthLayout'
import MasterLayout from './Modules/SharedModule/Components/MasterLayout/MasterLayout'
import NotFound from './Modules/SharedModule/Components/NotFound/NotFound'
import DashboardCourses from './Modules/Dashboard/Pages/DashboardCourses'
import AdmissionRequirements from './Modules/GuideModule/Components/AdmissionRequirements/AdmissionRequirements'
import AddCourses from './Modules/Dashboard/Pages/AddCourses'
import AddUsers from './Modules/Dashboard/Pages/AddStudents'
import Students from './Modules/Dashboard/Pages/Students'
import AddStudents from './Modules/Dashboard/Pages/AddStudents'
import Docters from './Modules/Dashboard/Pages/Docters'
import AddDocters from './Modules/Dashboard/Pages/AddDocters'
import Employees from './Modules/Dashboard/Pages/Employees'
import AddEmployees from './Modules/Dashboard/Pages/AddEmployees'
import Exams from './Modules/Dashboard/Pages/Exams'
import AddExams from './Modules/Dashboard/Pages/AddExams'
import ChangePassword from './Modules/Dashboard/Pages/ChangePassword'
import { Toaster } from 'sonner'

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <Guide />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'AdmissionRequirements',
          element: <AdmissionRequirements />,
        },
        {
          path: 'AboutUs',
          element: <AboutUs />,
        },
        {
          path: 'CallUS',
          element: <CallUs />,
        },
        {
          path: 'Edusystem',
          element: <Edusystem />,
        },

        {
          path: 'forgetpass',
          element: <Forgetpass />,
        },
      ],
    },

    // إذا كنت بحاجة إلى MasterLayout، تأكد من استيراده
    {
      path: '/dashboard',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/dashboard',
          element: <Home />,
        },
        {
          path: '/dashboard/courses',
          element: <DashboardCourses />,
        },
        {
          path: '/dashboard/courses/add-courses',
          element: <AddCourses />,
        },
        {
          path: '/dashboard/students',
          element: <Students />,
        },
        {
          path: '/dashboard/Students/AddStudents',
          element: <AddStudents />,
        },
        {
          path: '/dashboard/Docters',
          element: <Docters />,
        },
        {
          path: '/dashboard/Docters/AddDocters',
          element: <AddDocters />,
        },
        {
          path: '/dashboard/employees',
          element: <Employees />,
        },
        {
          path: '/dashboard/Exams',
          element: <Exams />,
        },
        {
          path: '/dashboard/Exams/AddExams',
          element: <AddExams />,
        },
        {
          path: '/dashboard/Docters/AddDocters',
          element: <AddEmployees />,
        },
        {
          path: '/dashboard/ChangePassword',
          element: <ChangePassword />,
        },
        {
          path: '/dashboard/users/add-users',
          element: <AddUsers />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={routes}/>
  )
}
