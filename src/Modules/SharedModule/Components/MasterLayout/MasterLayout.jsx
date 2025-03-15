import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar/Sidebar'

export default function MasterLayout() {
  return (

        <div> 
          <SideBar/>
        <Outlet/>
        </div>
  )
}
