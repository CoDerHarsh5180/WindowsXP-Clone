import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import track from '../assets/xp_startup.mp3'

function Welcome() {
  const Navigate = useNavigate()

 useEffect(()=>{
  setTimeout(()=>{
      Navigate('/mainWindow')
  },4000)
 },[])

  return (
    <div className='flex flex-col justify-between w-full h-screen bg-[#5A7EDC]'>
        {/* <audio src="https://win32.run/audio/xp_startup.mp3" preload='auto' autoPlay={true} play ></audio> */}
        <div className='bg-[#00309C] w-full h-30'><hr className='sticky top-30 text-white'/></div>
        <div className='text-5xl text-center italic font-bold text-white'>WELCOME</div>
        <div className='bg-[#00309C] w-full h-30'><hr className='text-white font-extrabold sticky'/></div>
    </div>
  )
}

export default Welcome

//https://win32.run/audio/xp_installing.mp3