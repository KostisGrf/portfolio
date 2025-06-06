import React, { useEffect } from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  return (


    
   <nav
  className={`fixed top-0 left-0 w-full px-4  z-[998] ${
    isScrolled && !isOpen ? "bg-black/60 backdrop-blur-md shadow-md py-3 transition-all delay-300" : "bg-transparent py-5"
  }`}
>
         <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold font-pacifico flex items-center space-x-2">
                <span>KostisGratsos</span>
                <span className="w-px h-6 bg-gray-300 inline-block"></span>
                <span className="text-primary font-roboto">Portofolio</span>
            </h1>
             <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <Menu size={28} />}
          </button>
        </div>

         <ul className="hidden md:flex gap-6 font-bold">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        </div>
         {isOpen && (
         <div className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 text-2xl z-[999]">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
        
    </nav>
  )
}

export default Navbar