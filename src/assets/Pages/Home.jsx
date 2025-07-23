import React from 'react'

import { Link } from 'react-router-dom'

import WeatherApp from '../Components/Weather'
import { ThemeProvider } from '../../context/ThemeContext'
import NewsApp from '../Components/News'
import Portfolio4 from '../Components/hero'
import NewsList from '../Components/NewsList'
import TypingTest from '../../components/ui/Typingtext'

const Home = () => {
  return (
   
    <div   >
      <Portfolio4/>
      <NewsList/>
      <TypingTest/>
     
       
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