import React from 'react'

const CommingSoon = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
    <div className="relative text-center">
      {/* Glowing circular element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-40"></div>
      
      {/* Text content */}
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          COMING SOON
        </h1>
        <p className="text-lg md:text-xl text-gray-400 tracking-wide">
          We're getting things ready . Stay tuned!
        </p>
      </div>
    </div>
  </div>
  )
}

export default CommingSoon
