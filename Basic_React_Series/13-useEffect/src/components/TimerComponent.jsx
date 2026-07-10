import { useState, useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    // Runs only on first render 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
            // setSeconds(seconds+1);
        }, 1000);

        return () => {
            clearInterval(intervalId); 
        }
    }, []);   
  
    return(  
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold text-4xl">Seconds : {seconds}</h1>
        </div> 
    ) 

    
}

export default TimerComponent;