import React from 'react'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: "url('/src/assets/images/hero-bg8.jpg')" }}
  >
    <div className="relative z-20 flex flex-col h-screen justify-center text-white">
      <h1 className='text-white text-7xl text-center'>404 Not Found</h1>
    </div>
  </div>
  )
}

export default NotFound