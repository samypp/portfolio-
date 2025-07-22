import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
import WeatherApp from '../Components/Weather'
import { ThemeProvider } from '../../context/ThemeContext'
import NewsApp from '../Components/News'
const Home = () => {
  return (
   
    <div>
     
       
           <Link to='/users'className='text-black underline'>
           View Users
           </Link>
         <WeatherApp/>
         <NewsApp/>
         <ThemeProvider/>
    </div>
    
  )
}

export default Home