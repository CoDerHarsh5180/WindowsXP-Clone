import { useEffect, useState } from 'react'


function Wrapper({obj}) {
  
  const [isDraggable, setIsDraggable] = useState(false)
  const [offSet, setOffset] = useState({x:0, y:0})
  const [boxPos, setBoxPos] = useState({x:0, y:0})
  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      if(e.clientX<=boxPos.x+680 && e.clientX>=boxPos.x && e.clientY<=boxPos.y+32 && e.clientY>=boxPos.y){
        setOffset({
          x:e.clientX-boxPos.x,
          y:e.clientY-boxPos.y
        })
      }

      if(isDraggable){
        setBoxPos({
          x:e.clientX-offSet.x,
          y:e.clientY-offSet.y
        })
        console.log('Dragging')
      }
      if(!isDraggable){
        setBoxPos({x:boxPos.x, y:boxPos.y})
      }
    })

  }, [isDraggable])
  function handle1(){
    if(!isDraggable){
      setIsDraggable(true)
    }
  }
  function handle2(){
    setIsDraggable(false)
  }
  return (
    <div className='w-[680px]' style={{left:`${boxPos.x}px`, top:`${boxPos.y}px`,position:`absolute`}} onMouseDown={handle1} onMouseUp={handle2}>
      <div className='w-full h-[32px] bg-linear-to-b from-blue-500 via-blue-600 to-blue-400 rounded-t-md items-center flex justify-between p-1'>
        <div className='flex gap-2'>
          <img width="25" src={obj.image} draggable={false} alt="" />
          <span className='font-bold text-white'>{obj.name}</span>
        </div>
        <div className='flex gap-1'>
          <span className='hover:opacity-80'>
            <img src="https://win32.run/images/xp/icons/Minimize.png" draggable={false}  width={30} alt="" />
          </span>
          <span className='hover:opacity-80'>
            <img src="https://win32.run/images/xp/icons/Maximize.png" draggable={false}   width={30} alt="" />
          </span>
          <span className='hover:opacity-80'>
            <img src="https://win32.run/images/xp/icons/Exit.png" draggable={false} width={30} alt="" />
          </span>
        </div>
      </div>
      <div className='h-90 w-full border border-blue-600'>
        <obj.Component/>
      </div>
    </div>
  )
}

export default Wrapper
