import React from 'react'
import { logo } from '../assets/assest'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
     const Navigate = useNavigate();

const moveToLogin = (e)=>{
     e.preventDefault()
     Navigate("/login")
}

const handleRegister = async function (e) {
     e.preventDefault()
     const formdata = document.getElementById('registerForm')
     const data = Object.fromEntries(new FormData(formdata))

console.log(data.userName)
     try{
          const response = await axios.post('/winxp/user/register',data);
          console.log(response.data)
          Navigate('/welcome',{replace:true})
     
     }
     catch(error){
          if(error.response){
               console.log(error.response?.status);
               console.log(error.response.data);
          }
          console.log(error)
     }
}


  return (
    <div className=' w-screen h-screen  bg-blue-600 flex items-center justify-center'>
          <div className=' md:w-240  w-full border-6 border-blue-700 rounded-xl'>
               <div className=' p-2 bg-[linear-gradient(var(--xp-gradient))] text-white text-2xl'>Register On to Windows</div>
               <div className='grow flex flex-col'>
               <div className=' py-12 h-[50%] grid grid-cols-3 bg-linear-to-r from-[#86A8FF] via-[#9AB6FF] to-[#86A8FF] font-medium text-xs md:text-lg px-4 text-white'>
               <div className='relative' >
                    <h2 className='absolute -bottom-2'>Copyright 1985-2001</h2>
                    <h2 className='absolute -bottom-8'>Microsoft Corporation</h2>
               </div>
               <div className='overflow-hidden'>
                    <img  src="http://win32.run/images/xp_logo_horizontal.png" alt='Logo'></img>
               </div>
               <div className='relative'><h2 className='absolute -bottom-2'>Microsoft</h2></div>
               
               </div>
               <div  className='bg-yellow-50 p-4 py-12'>
                    <form id='registerForm' className='flex flex-col gap-4'>
                         <div className=' flex gap-8'>
                              <label htmlFor='username'>Username: </label>
                              <input className='bg-white border-black border rounded-xs px-1 w-[50%]' id='username' type='text' placeholder='Username...' name='userName' required autoComplete='true'></input>
                         </div>
                         <div className=' flex gap-15.5'>
                              <label htmlFor='email'>email: </label>
                              <input className='bg-white border-black border rounded-xs px-1 w-[50%]' id='email' type='email' placeholder='email...' name='email' required autoComplete='true'></input>
                         </div>
                         <div className=' flex gap-8'>
                              <label htmlFor='password'>password: </label>
                              <input  className='bg-white border-black border rounded-xs px-1 w-[50%]' id='password' type='password' placeholder='password...' name='password' required autoComplete='true'></input>
                         </div>
                         <div className=' flex gap-8'>
                              <label htmlFor='confirm-password'>password: </label>
                              <input  className='bg-white border-black border rounded-xs px-1 w-[50%]' id='confirm-password' type='password' placeholder='confirm-password...' name='confirm-password' required autoComplete='true'></input>
                         </div>
                         <div className='flex flex-row justify-evenly'>
                              <button onClick={handleRegister} className='bg-white min-w-24 border '>OK</button>
                              <button className='bg-white min-w-24 border '>Cancel...</button>
                              <button onClick={moveToLogin} className='bg-white min-w-24 border '>Login...</button>
                         </div>
                    </form>
               </div>
               </div>
          </div>
    </div>
  )
}

export default Register
