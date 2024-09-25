import React from 'react'
import ProjectArr from "../Constant/index"
import ProjectData from './ProjectData';

const Project = () => {
   

  return (
   <>


        <div className=" flex justify-center items-center">
          <div className="flex flex-col p-1 rounded-lg overflow-hidden max-w-[60rem] relative mt-[8rem] z-20">
        
        {
            ProjectArr.map((ProjectArr,index)=>{
               return <ProjectData  
               key={index}
               title={ProjectArr.tittle} 
               date={ProjectArr. publishDate}
               image={ProjectArr.image} 
               description={ProjectArr.description} 
               technology={ProjectArr.technology}
               sourceCodeUrl={ProjectArr.sourceCodeUrl}
               liveDemoUrl={ProjectArr.LiveLink}
               />
            })
        }
    
        </div>
        </div>
     
   </>
  )
}

export default Project
