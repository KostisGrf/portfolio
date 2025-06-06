import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>

    {/* navbar */}
    
    <Hero />

    {/* main content */}
    <Projects />

   <Skills />

   <Contact />

    {/* footer */}
    <Footer />

    </div>
  )
}

export default Home