import React from 'react'
import Banner from '../components/Banner'
import Design from '../components/Design'
import { Footer } from '../components/Footer'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import "../Home.css"

const Home = () => {
  return (
   <>
   <div className='home'>
    
   <NavBar />
    <Banner />
    
    <Skills />
    <Design/>
    <Projects/>
   
    
    <Footer />
   </div>
    
   </>
  )
}

export default Home