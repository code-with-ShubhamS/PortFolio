import React from 'react'
import { FaJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import DivideLine from './DivideLine';
import {animate, motion} from "framer-motion"

const isvarient=(duration)=>(
  {
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  }
)
const Technology = () => {
  return (
    <div className='mt-7'>
      <h1
      className='text-center text-3xl font-bold'>Technology</h1>
      <div 
       

      className='flex justify-center gap-3 mt-5 flex-wrap'>
        <motion.div
        variants={isvarient(2.5)}
        initial="initial"
        animate="animate"
        className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <IoLogoNodejs className='text-[#339933]'/>
        </motion.div>

        <motion.div
         variants={isvarient(3.7)}
         initial="initial"
         animate="animate"
         className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <FaJs className='text-[#F7DF1E]'/>
        </motion.div>

        <motion.div 
        variants={isvarient(5.3)}
        initial="initial"
        animate="animate"
        className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <FaReact className='text-[rgb(97,218,251)]'/>
        </motion.div>

        <motion.div
        variants={isvarient(4)}
        initial="initial"
        animate="animate"
        className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <SiMongodb className='text-[#47A248]'/>
        </motion.div>

        <motion.div
        variants={isvarient(4.5)}
        initial="initial"
        animate="animate"
        className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <RiTailwindCssFill  className='text-[#0EA5E9]'/>
        </motion.div>

        <motion.div
        variants={isvarient(3)}
        initial="initial"
        animate="animate"
        className='text-4xl bg-neutral-900 border-2 border-[#787878] text-white p-2 rounded-md '>
            <GrMysql  className='text-[#00758F]'/>
        </motion.div>
      </div>
      <DivideLine></DivideLine>
    </div>
  )
}

export default Technology;
