import React from 'react'
import NavBar from './components/Navbar'
import HeroImg from './components/HeroImg'
import Footer from './components/Footer'
import SkillsShowcase from './components/SkillsShowcase'

const Home = () => {
  return (
    <div>
     <NavBar/>
     <HeroImg/>
     <SkillsShowcase/>
     <Footer/>
    </div>
  )
}

export default Home
