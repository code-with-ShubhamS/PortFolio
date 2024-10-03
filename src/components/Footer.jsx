import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  
  return (
    <div>
      <div className='mt-[3.5rem]'>
      <div className="w-full bg-gradient-to-r from-green-900 via-zinc-700 to-red-900 h-[1.5px] rounded-full  "></div>
      <div className='flex justify-between px-[30px] py-[15px]' >
        <p className='text-[#4b4b4b]'>2024 @Shubham Semwal</p>
      
        <div >
     
            <a href="https://github.com/code-with-ShubhamS/PortFolio" target='_blank' rel="noopener noreferrer" className='text-[#989898] hover:cursor-pointer'> <FaGithub className="text-lg inline  mr-1 text-white"/>space</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
