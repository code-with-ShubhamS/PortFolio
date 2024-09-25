import React from 'react'

const ProjectData = ({title,date,image,description,sourceCodeUrl,liveDemoUrl,technology}) => {
  
  return (
    <div className='flex flex-col  my-7 justify-center sm:flex-row'>


    <div className='flex p-4 w-[100%]  sm:w-[50%]'>
                {/* Image Section */}
    <div className="relative group w-full h-full">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-[#504e5140] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
    </div>
    </div>
    {/* Project Description */}
          




    {/* justify-content: center;
    display: flex;
    flex-direction: column; */}


 <div className=" p-[0.5rem] md:p-6 rounded-lg  mx-auto w-[100%] sm:w-[50%] flex justify-center flex-col">
  {/* Title and Date */}
  <div className="mb-4">
    <h2 className="text-[1.5rem] font-bold ">{title}</h2>
    <p className="">{date}</p>
  </div>

  {/* Description */}
  <p className=" mb-4">
   {description}
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 mb-6">
    {technology.map((tag, index) => (
      <span key={index} className={`bg-gray-800  py-1 px-3 rounded-full text-sm`}>
        {tag}
      </span>
    ))}
  </div>

  {/* Buttons */}
  <div className="flex space-x-4">
    <a href={sourceCodeUrl}
    target='_blank'
      className={`flex items-center space-x-2 bg-gray-900  py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300`}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 0-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.09 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.08.16 1.89.08 2.09.51.56.82 1.27.82 2.15 0 3.08-1.87 3.75-3.65 3.96.29.25.54.73.54 1.47 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      <span>Source Code</span>
    </a>

    <a href={liveDemoUrl}
      target='_blank'
       className={`flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300`}>
       <span>{liveDemoUrl===null?"Not Live":"Live Demo"}</span>
       <svg className="w-5 h-5 mb-[6px] " fill="currentColor" viewBox="0 0 20 20">
         <path className='' d="M12.293 8.293a1 1 0 0 1 1.414 1.414L10.414 13l3.293 3.293a1 1 0 1 1-1.414 1.414L8 14.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 13 3.293 9.707a1 1 0 0 1 1.414-1.414L8 11.586l3.293-3.293z" />
       </svg>
     </a>
    
    
  </div>
</div>
</div>
  )
}

export default ProjectData
