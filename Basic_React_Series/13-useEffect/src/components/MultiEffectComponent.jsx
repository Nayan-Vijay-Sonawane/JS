import { useState, useEffect } from "react";

const MultiEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // side effect logic will run only when the count is changed 
    useEffect(() => {
        console.log("Count changed: ", count);
    }, [count]);

    // Runs only on first render
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (

        <div className="h-screen gap-5 bg-black text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Count: {count}</h1>
            <button className="bg-gray-500 px-5 py-2 rounded cursor-pointer active:scale-95" onClick={() => setCount(count+1)}>Increment Count</button>
            <h2 className="text-2xl font-bold">Seconds: {seconds}</h2>
        </div>

    )
}

export default MultiEffectComponent;