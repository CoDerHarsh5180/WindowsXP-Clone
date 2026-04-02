// https://win32.run/
import { useState } from 'react'
import './App.css'
import { Navigate, Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import StartWindow from './components/StartWIndow.jsx'
import Welcome from './components/Welcome.jsx'
import MainWindow from './components/MainWindow.jsx'
// import Icon from './components/icon'

function App() {

  return (

    <div>
      <Routes>
          <Route path='/' element={<Navigate to="/startWindow"/>} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/startWindow' element={<StartWindow/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/welcome' element={<Welcome/>} />
          <Route path='mainWindow' element={<MainWindow/>} />
      </Routes>
      
      
    </div>
  )
  
}

export default App
