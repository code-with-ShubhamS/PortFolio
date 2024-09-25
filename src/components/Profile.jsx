import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import DivideLine from './DivideLine';
const Profile = () => {
  return ( 
    <>
      <h1 className="text-3xl font-semibold">Shubham Semwal</h1>
      <p className="text-lg mt-2">I write code.</p>
      <img 
        src="myImg.png" 
        alt="Shubham Semwal" 
        className="w-24 h-24 rounded-full mb-4 mt-5"
      />
      <p className="mt-4 ">
        Hello, I'm Shubham Semwal, a full Stack Developer who enjoys building interesting things with code. 
        Welcome to my digital space!
      </p>
      <p className="mt-4 ">
      My expertise lies in developing responsive user interfaces for web-based applications, ensuring a secure and seamless user experience.
      </p>
      <div className="flex  space-x-4 mt-6">
        <a href="https://github.com/code-with-ShubhamS" target="_blank" rel="noopener noreferrer" className="text-2xl bg-neutral-900 relative  hover:bg-black/90 border border-transparent text-white  md:text-sm transition font-medium duration-200 rounded-[8px] px-3  py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] cursor-pointer ">
          <FaGithub className="text-lg"/>
        </a>
        <a href="https://www.linkedin.com/in/shubham-semwal-4080962b7/" target="_blank" rel="noopener noreferrer" className="text-2xl bg-neutral-900 relative  hover:bg-black/90 border border-transparent text-white  md:text-sm transition font-medium duration-200 rounded-[8px] px-3  py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] cursor-pointer ">
          <FaLinkedin className="text-lg"/>
        </a>
        <a href="mailto:ghostoperator846@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl bg-neutral-900 relative  hover:bg-black/90 border border-transparent text-white  md:text-sm transition font-medium duration-200 rounded-[8px] px-3  py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] cursor-pointer ">
          <FaEnvelope className="text-lg"/>
        </a>
        <a href="https://twitter.com/Shubham_code12" target="_blank" rel="noopener noreferrer" className="text-2xl bg-neutral-900 relative  hover:bg-black/90 border border-transparent text-white  md:text-sm transition font-medium duration-200 rounded-[8px] px-3  py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] cursor-pointer ">
          <BsTwitterX className="text-lg"/>
        </a>
      </div>

      <DivideLine></DivideLine>
      </>
  )
}

export default Profile
