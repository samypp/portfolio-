import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../assets/Pages/Home'
import About from '../assets/Pages/About'
import Contact from '../assets/Pages/Contact'
import Users from '../assets/Pages/Users'
import UserList from '../assets/Pages/UserList'
import UserDetail from '../assets/Pages/UserDetail'
import Project from '../assets/Pages/project'

function
AppRouter() {
  return (
 

    <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project' element={<Project/>} />
     
        <Route path='/users' element={<Users/>}/>


         <Route>
            <Route path='/' element={<Home/>} />

            <Route  path='/dashboard'/>
            <Route  path='/profile'/>
            <Route  path='/setting'/>

        </Route>
        < Route path='/users' element={<Users/>}>
        <Route index element={<UserList/>} />
        <Route path=':id' element={<UserDetail />} />
        
        
        </Route>


    </Routes>
  )
}

export default AppRouter
