// https://win32.run/
import { useState } from 'react'
import './App.css'
import { Navigate, Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Icon from './components/icon'

function App() {

  return (

    <div>
     <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>} />

      </Routes>
      
      
      </div>
  )
  
}

export default App
