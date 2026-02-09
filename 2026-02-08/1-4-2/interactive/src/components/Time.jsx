
import { useState,useEffect } from 'react'


export default function Time() {
    const [time,setTime] = useState (
        new Date().toLocaleTimeString()
    );

    const [isRunning,setIsRunning] = useState(false);
    
    useEffect (() => {
        if (!isRunning) return;

        const id = setInterval(()=>{
            setTime(new Date(). toLocaleTimeString());
        },1000);

        return () => clearInterval (id);
    },[isRunning]); 
  return (
    <div className='time-box'>
        <h1 className='time-card'>{time}</h1>
        <button 
        className={`time-btn ${isRunning? "stop":"start"}`}
        onClick={() => setIsRunning(p => !p)}>
        {isRunning ? "Stop" : "Start"}    
        </button> 

    </div>
    
  )
}
