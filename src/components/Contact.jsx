import React from 'react'
import { Linkedin,Mail } from 'lucide-react';
import { useState } from 'react';


const Contact = () => {
    const [copied,setCopied]=useState(false);

    const handleCopy = async() =>{
        await navigator.clipboard.writeText("kostisgratsos@hotmail.gr");
        setCopied(true);
        setTimeout(()=>setCopied(false),2000)
    }

  return (
    <section id='contact' className='mt-20 text-white flex  flex-col items-center mb-20 '>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-primary'>Touch</span></h2>
        <div className='flex gap-4 mb-3'>
            <a href="https://www.linkedin.com/in/kgratsos/" target='_blank'><Linkedin size={30} /></a>
            <a href="mailto:kostisgratsos@hotmail.gr"><Mail size={30} /></a>
        </div>
        <button className='border-2 py-2 px-3 cursor-pointer' onClick={handleCopy}> {copied ? "Copied!":"Copy Email"}</button>
    </section>
  )
}

export default Contact