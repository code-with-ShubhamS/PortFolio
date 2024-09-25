import React from 'react'
import Projects from './Projects'
import Technology from './Technology'
import Profile from './Profile'


const Home = () => {
  
  return (
    <>
            <div className="flex justify-center items-center">
            <div className= {`"flex flex-col p-6  rounded-lg overflow-hidden  max-w-[50rem] relative mt-[8rem] z-20  text-[1.2rem]`}>
            <Profile />
            <Technology />
            <Projects />
         </div>
         </div>
    </>
  )
}

export default Home
