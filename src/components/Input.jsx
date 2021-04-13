import react, { useEffect, useRef, useState } from 'react'

function Input()
{
    const inputref=useRef();
    const [timer,setTimer]=useState(0);
    const timeref=useRef(null);
  let   handleStart=()=>
    {
      if(timeref.current!==null)
      {
          return;
      }
      timeref.current=setInterval(() => {
          setTimer((prev)=>prev+1)
      }, 1000);
    }
    let handleStop=()=>
    {
        clearInterval(timeref.current);
        timeref.current=null
    }
    let handleRestart=()=>
    {
        clearInterval(timeref.current);
        timeref.current=null;
        setTimer(0);
    }
    useEffect(()=>{
        return () =>{
            timer.current&&handleStop();
        }
    },[])
    return(
        <>
        <input type="text" ref={inputref}/>
        <input type="text" ref={inputref}/>
        <button onClick={()=>inputref.current.focus()}>Focus</button>
        <h1>Stop Watch</h1>
        <h2>{timer}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRestart}>Reset</button>
        </>
    )
}
export {Input}