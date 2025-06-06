import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-3'>
        {" "}
        <p className='text-white text-center'>
            {" "}
            &copy; {new Date().getFullYear()} KostisGratsos. All rights reserved.
            
        </p>
        
    </footer>
  )
}

export default Footer