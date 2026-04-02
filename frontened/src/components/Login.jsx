import React,{useState,useRef} from 'react'
import { logo } from '../assets/assest'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


const Login = () => {

const Navigate = useNavigate()
const [userName,setuserName] = useState('')
const [password,setpassword] = useState('')

const moveToRegister = (e)=>{
     e.preventDefault()
     Navigate('/register')
}
const updateuserName= (e)=>{
     setuserName(e.target.value)
}


const handleLogin =async (e)=>{
     
     e.preventDefault()
     const formdata = document.getElementById('loginForm')
     const data = Object.fromEntries( new FormData(formdata));
     console.log(data)
     try{
          const response = await  axios.post('/winxp/user/login',formdata)
          console.log(response.data)
          Navigate('/welcome',{replace:true})
     }
     catch(error){

          if(error.response){
               console.log(error.response.status);
               console.log(error.response.data);
          }
          window.alert("Incorrect Username of password!")
     }
}

const handleClear = (e)=>{
     e.preventDefault();
     setpassword('')
     setuserName('')
}


  return (
     
    <div className=' w-screen h-screen  bg-blue-600 flex items-center justify-center'>
          <div className=' md:w-240  w-full border-6 border-blue-700 rounded-xl'>
               <div className='p-2 bg-[linear-gradient(var(--xp-gradient))] text-white text-2xl'>Log On to Windows</div>
               <div className='grow flex flex-col'>
               <div className='py-12 h-[50%] grid grid-cols-3 bg-linear-to-r from-[#86A8FF] via-[#9AB6FF] to-[#86A8FF]  font-medium text-xs md:text-lg px-4 text-white'>
               <div className='relative' >
                    <h2 className='absolute -bottom-2'>Copyright 1985-2001</h2>
                    <h2 className='absolute -bottom-8'>Microsoft Corporation</h2>
               </div>
               <div className='overflow-hidden'>
                    <img  src="http://win32.run/images/xp_logo_horizontal.png"  alt='Logo'></img>
               </div>
               <div className='relative'><h2 className='absolute -bottom-2'>Microsoft</h2></div>
               
               </div>
               <div  className='bg-yellow-50 p-4 py-12'>
                    <form id='loginForm' className='flex flex-col gap-4'>
                         <div className=' flex gap-8'>
                              <label htmlFor='username'>Username: </label>
                              <input onChange={updateuserName} value={userName} className='bg-white border-black border rounded-xs px-1 w-[50%]' id='username' type='text' placeholder='Username...' name='userName' required autoComplete='true' ></input>
                         </div>
                         <div className=' flex gap-8'>
                              <label htmlFor='password'>password: </label>
                              <input onChange={(e)=>{
                                   setpassword(e.target.value)
                              } } value={password} className='bg-white border-black border rounded-xs px-1 w-[50%]' id='password' type='password' placeholder='password...' name='password' required autoComplete='true'></input>

                         </div>
                         <div className='flex flex-row justify-evenly'>
                              <button onClick={handleLogin}  className='bg-white min-w-24 border '>OK</button>
                              <button onClick={handleClear} className='bg-white min-w-24 border '>Clear...</button>
                              <button onClick={moveToRegister} className='bg-white min-w-24 border '>Register...</button>
                         </div>
                    </form>
               </div>
               </div>
          </div>
    </div>
  )
}

export default Login
