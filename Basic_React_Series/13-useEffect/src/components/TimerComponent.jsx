import { useState, useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    // Runs only on first render 
    useEffect(() => {
        const intervalId = setInterval(() => {
            // setSeconds(seconds+1);
            // seconds=0 -> The interval callback remembers this value because of js closure
            // seconds=0 -> setSeconds(0+1) -> Since the effects runs only once, the callback keeps using the initial value
            // it never increase beyond 1 

            setSeconds(prevSeconds => prevSeconds + 1);
            // this is called functional updater
            
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