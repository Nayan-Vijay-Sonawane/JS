import { useState, useEffect } from "react";

const MultiEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (

        <div className="h-screen gap-5 bg-black text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl ">Count: {count}</h1>
            <button className="bg-gray-500 px-5 py-2 rounded cursor-pointer active:scale-95" onClick={() => setCount(count+1)}>Increment Count</button>
        </div>

    )
}

export default MultiEffectComponent;