import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Forgetpass from './Modules/AuthenticationModule/Components/ForgetPass/Forgetpass'
import Login from './Modules/AuthenticationModule/Components/Login/Login'
import Register from './Modules/AuthenticationModule/Components/Register/Register'
import AddCategory from './Modules/Dashboard/Pages/AddCategory'
import Categories from './Modules/Dashboard/Pages/Categories'
import Home from './Modules/Dashboard/Pages/Home'
import AboutUs from './Modules/GuideModule/Components/AboutUs/AboutUs'
import CallUs from './Modules/GuideModule/Components/CallUs/CallUs'
import Edusystem from './Modules/GuideModule/Components/EduSystem/Edusystem'
import Guide from './Modules/GuideModule/Components/Guide'
import AuthLayout from './Modules/SharedModule/Components/AuthLayout/AuthLayout'
import MasterLayout from './Modules/SharedModule/Components/MasterLayout/MasterLayout'
import NotFound from './Modules/SharedModule/Components/NotFound/NotFound'
import DashboardCourses from './Modules/Dashboard/Pages/DashboardCourses'
export default function App() {
  const routes=createBrowserRouter([
    {
    path:"/",
    element:<AuthLayout/>,
    errorElement:<NotFound/>,
    children:[{
      path:"",
      element:<Guide/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    },
    {
      path:"AboutUs",
      element:<AboutUs/>
    },
    {
      path:"CallUS",
      element:<CallUs/>
    },
    {
      path:"Edusystem",
      element:<Edusystem/>
    },

    {
      path:"forgetpass",
      element:<Forgetpass/>
    },
  ]
    },

    // إذا كنت بحاجة إلى MasterLayout، تأكد من استيراده
    {
      path: "/dashboard",
      element: <MasterLayout/>,
      errorElement: <NotFound />,
      children: [
        {
          path:"/dashboard/home",
          element:<Home/>
        },
        {
          path:"/dashboard/categories",
          element:<Categories/>
        },
        {
          path:"/dashboard/categories/add-category",
          element:<AddCategory/>
        },
        {
          path:"/dashboard/courses",
          element:<DashboardCourses/>
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
