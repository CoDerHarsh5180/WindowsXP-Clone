import React from 'react'
import { useState, useRef, useEffect } from 'react'
function Icon({img, name}) {
  const [position, setPosition] = useState({x:0, y:0})
  const box = useRef(0)
  const [isDraagble, setIsDraggable] = useState(false)
  const [boxPos, setBoxPos] = useState({x:0, y:0})
  const [offSet, setOffSet] = useState({x:0, y:0})
  useEffect(()=>{
    
    window.addEventListener('mousemove',(e)=>{
      setPosition({x:e.clientX, y:e.clientY})
      
      if(e.clientX<=75+boxPos.x && e.clientY<=75 + boxPos.y && e.clientX>=boxPos.x && e.clientY>=boxPos.y){
        
        setOffSet({x:e.clientX-boxPos.x, y:e.clientY-boxPos.y})
      }

      if(isDraagble){
        setBoxPos({
          x:e.clientX -offSet.x,
          y:e.clientY-offSet.y
        })
      }
      if(!isDraagble){
        setBoxPos({x:boxPos.x, y:boxPos.y})
      }

    })
  },[isDraagble])
  function handle(){
    if(isDraagble){
      setIsDraggable(false)
    }
  }
  function handle1(){
    setIsDraggable(true)
  }
 
  return (
    <div className=''>
      <div className='hover:bg-blue-500/25 hover:border-blue-700/30 hover:border rounded-xs w-[75px] h-[90px] flex flex-col justify-center items-center text-center' onMouseDown={handle1}  onMouseUp={handle} ref ={box} style={{left:`${boxPos.x}px`,top:`${boxPos.y}px`, position:'absolute'}}>
       <img src={img} width="45" draggable={false} alt="" />
       <span className=' font-tahoma text-sm text-white'>{name}</span>
      </div>
      
      
    </div>
  )
}

export default Icon