import { useState,useRef,useEffect } from 'react'

export default function Stopwatch() {

    const [time,setTime] = useState(0)
    const intervalRef = useRef(null)

    //  interval 저장용 ref
    //  이미 타이머가 돌고 있음 중복 실행 방지 => 그냥 return
    const start = () => {
        if (intervalRef.current) return
        
        
        intervalRef.current =setInterval(() => {
            setTime (prev => prev + 10);
        }, 10);
    };
        
    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };


    const reset = () => {
        stop();   // 멈추고
        setTime(0)   // 0초기화 시키기
    };

    useEffect (() => {
        return () => stop ();
    },[])

    const unitTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000); //소수점 버리기
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    // % = 나머지 
    // padStart : 옆에 빈자리 0 채우는 부븐
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
    };



    //  타이머 계속 도는 거 방지하기 위해
    useEffect (() => {
        return () => stop ();
    }, []);

return (
    
    <div className="time-card">
        <div className="time-label">STOPWATCH</div>
        
        <h1>{unitTime(time)}</h1>

        
        {/* 사이 간격 주는 */}
        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>

            <button className="time-btn start" onClick={start}>Start</button>
            <button className="time-btn stop" onClick={stop}>Stop</button>
            <button className="time-btn" onClick={reset}>Reset</button>
        </div>
    </div>
    
);
}


