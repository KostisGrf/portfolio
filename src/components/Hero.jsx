import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
<>
  
   <section className="relative w-full min-h-[70vh] text-white" id='home'>
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: "url('/assets/images/hero-bg9.jpg')" }}
  />

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/70 z-10" />
  <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 bg-gradient-to-t from-[rgba(41,44,52,1)] via-[rgba(41,44,52,0.7)] to-transparent"></div>

  <div className="relative z-20 flex flex-col min-h-[70vh]">
    <Navbar />
    <div className="flex-grow flex flex-col justify-center items-center text-center gap-3 px-4">
      <h1 className="text-white text-4xl font-bold">
        Hi, I'm <span className="text-primary">Kostis</span> Gratsos
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        An aspiring full-stack developer crafting sleek interfaces, robust backends, and everything in between.
      </p>
    </div>
  </div>
</section>
</>
    
  )
}

export default Hero