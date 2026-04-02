import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function StartWindow() {
    const Navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            Navigate('/login')
        }, 4000);
    },[])
  return (
    
    <div className=''>
        <style>
            {`
                @keyframes right{
                    0% {left:-100px;}
                    100% {left:260px;}
                }
            `}
        </style>
        <div className='w-full h-screen bg-black flex flex-col justify-center items-center gap-10'>
            <img src="https://win32.run/images/xp_loading_logo.jpg" width ={400} alt="" />
        
            <div className='overflow-hidden w-60 bg-black h-8 rounded-xl border-2 border-white flex items-center gap-2'>
                    
                <span className='relative  w-5 h-5 bg-linear-to-b from-blue-600 via-blue-950 to-blue-500  animate-[right_2s_ease-in_infinite] rounded-md '></span>
                <span className='relative  w-5 h-5 bg-linear-to-b from-blue-600 via-blue-950 to-blue-500  animate-[right_2s_ease-in_infinite] rounded-md '></span>
                <span className='relative w-5 h-5 bg-linear-to-b from-blue-600 via-blue-950 to-blue-500  animate-[right_2s_ease-in_infinite] rounded-md '></span>
                </div>
              
        </div>
        <div className='absolute bottom-1 px-1 flex w-full justify-between bg-black text-white'>
            <span className='text-xl'>Copyright © Microsoft Cooperation</span>
            <span className='text-xl font-extrabold italic'>Microsoft™</span>
        </div>
    </div>
  )
}

export default StartWindow