import React from 'react'
import DivideLine from './DivideLine'
import { MdKeyboardArrowRight } from 'react-icons/md'

const EndComponent = () => {
  return (
    <>
    <DivideLine></DivideLine>
    <div className='flex items-center gap-1'>
      <MdKeyboardArrowRight />
      <a className="bg-transparent tracking-wide text-[rgb(248 248 248)] underline decoration-[#4B4B4B] decoration-[1.2px] underline-offset-4 opacity-50 transition-all duration-300 hover:opacity-100 dark:text-white" href="/">cd<span className="tracking-[0.4rem]">..</span></a>
      {/* <p className='underline text-[1.3rem] hover:text-white text-gray-400 offset-4'>cd . .</p> */}
      </div>
    </>
  )
}

export default EndComponent
