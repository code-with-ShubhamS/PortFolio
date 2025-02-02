import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import Music from "../Constant/Music.js"
import Header from './Header.jsx';

const Playground = () => {
  const [songs] = useState(Music);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * audioRef.current.duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };
  return (
    <div className="relative h-full w-full bg-slate-950 text-white">
  <div className="bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
  </div>
  <Header/>
    <div className="flex justify-center items-center">
 
    <div className="font-sans mt-[4rem] w-[50rem] relative">
      <div className="max-w-4xl mx-auto px-4 py-8 mb-24">
        <h1 className="text-3xl font-bold mb-8 ">Let's Relax Your Mind with Music🎺</h1>
        
        <div className="rounded-lg shadow-sm">
          <div className="divide-y">
            {songs.map((song, index) => (
              <div 
                key={index}
                className="song-item p-2 flex items-center hover:cursor-pointer group gap-[1rem]"
                onClick={() => {
                  console.log(index)
                  setCurrentSong(index);
                  setIsPlaying(true);
                }}
              >
                <div className='flex items-center'>
                <img src={song.img} alt="Album cover" className="w-12 h-12 rounded-md object-cover"/>
                <button className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-custom text-white !rounded-button">
                  {index === currentSong &&  <FontAwesomeIcon icon={ isPlaying ? faPause : faPlay} />}
                </button>
                </div>
                <div className="ml-4 flex-grow w-[100%]">
                  <h3 className="color-white font-medium">{song.title}</h3>
                  <p className="text-sm ">{song.artist}</p>
                </div>
                <div>
                <span className="text-sm ">{song.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" bottom-0 left-0 right-0 border-t border-gray-200 px-4 py-3 backdrop-blur-sm absolute">
        <div className="max-w-4xl mx-auto flex items-center flex flex-col sm:flex-row sm:justify-between">
          <div className='flex w-[100%]'>

        
          <img src={songs[currentSong].img} alt="Now playing" className="w-16 h-16 sm:w-20 sm:h-20 rounded-md rounded-md object-cover"/>
          
          <div className="ml-4 flex-grow">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">{songs[currentSong].title}</h3>
                <p className="text-sm ">{songs[currentSong].artist}</p>
              </div>
              <div className="text-sm ">
                {formatTime(currentTime)} / {songs[currentSong].duration}
              </div>
            </div>
            
            <div 
              className="relative h-1 bg-gray-200 rounded-full cursor-pointer max-w-[33rem]"
              onClick={handleProgressClick}
            >
              <div 
                className="absolute h-full bg-custom rounded-full bg-[#777777]" 
                style={{ width: `${(currentTime / (parseFloat(songs[currentSong].duration.replace(':', '.')) * 60)) * 100}%` }}
              ></div>
            </div>
          </div>
          </div>
          <div className="ml-6 flex items-center space-x-4">
            <button className=" hover:text-gray-400 !rounded-button" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-custom hover:text-gray-300 !rounded-button"
              onClick={togglePlay}
            >
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <button className=" hover:text-gray-400 !rounded-button" onClick={handleNext}>
              <FontAwesomeIcon icon={faForward} />
            </button>
            <div className="flex items-center space-x-2">
              <button className="hover:text-gray-500 !rounded-button">
                 <FontAwesomeIcon icon={volume===0 ? faVolumeMute : faVolumeUp} onClick={()=>{
                  if(volume){
                    setVolume(0);
                    audioRef.current.volume = 0;
                  }else{
                    setVolume(0.5);
                    audioRef.current.volume = 0.5;
                  }
                 }}/>
               
              </button>
              
  
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="hover:cursor-pointer w-24 h-1 bg-gray-200 rounded-full appearance-none
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-3
        [&::-webkit-slider-thumb]:h-3
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-blue-500"
      />
   
            </div>
          </div>
        </div>
      </div>


      <audio 
        ref={audioRef}
        src={songs[currentSong].audio}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />
    </div>
    </div>
    </div>
  )
}

export default Playground
