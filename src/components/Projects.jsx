import React from 'react'
import Project from "../Constant/index"
import EndComponent from './EndComponent'

const Projects = () => {

  return (
    <div className='mt-7'>
        <h2 className='text-center text-3xl font-bold'>Projects</h2>
        <div className='mt-6'>
            {Project.map((item,index)=>(
                 <div key={index} className='flex flex-col mt-8 md:flex-row items-center justify-center' >
                 <div className='max-w-[100%] md:max-w-[50%]'>
                     <img src={item.image} alt="Image Not Found" className='rounded w-full h-full'/> 
                 </div>
                 <div className='flex flex-col items-center pl-[30px] max-w-[100%] md:max-w-[50%]'>
                     <h2 className='my-4 font-semibold text-xl'>{item.tittle}</h2>
                     <p className='mb-2 '>{item.description}</p>
                     <div className='flex gap-2 flex-wrap'>
                        {item.technology.map((ele,idx)=>(
                             <span key={idx} className={`'rounded  px-2 py-1 text-sm  font-medium text-purple-800 bg-neutral-900`}>{ele}</span>
                        ))}
                     </div>
                 </div>
             </div>
            ))}
           
        </div>
       
        <EndComponent/>
    </div>
    
  )
}

export default Projects
